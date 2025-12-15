import '@servicenow/sdk/global'
import { Table, ReferenceColumn, DateTimeColumn, ChoiceColumn, StringColumn } from '@servicenow/sdk/core'

export const x_snc_national_p_1_assignment = Table({
    $id: Now.ID['assignment_table'],
    name: 'x_snc_national_p_1_assignment',
    label: 'Assignment',
    extends: 'task',
    schema: {
        ranger: ReferenceColumn({
            label: 'Ranger',
            referenceTable: 'x_snc_national_p_1_ranger',
            mandatory: true
        }),
        zone: ReferenceColumn({
            label: 'Zone',
            referenceTable: 'x_snc_national_p_1_zone',
            mandatory: true
        }),
        shift_start: DateTimeColumn({
            label: 'Shift Start',
            mandatory: true
        }),
        shift_end: DateTimeColumn({
            label: 'Shift End',
            mandatory: true
        }),
        assignment_type: ChoiceColumn({
            label: 'Assignment Type',
            choices: {
                patrol: { label: 'Patrol', sequence: 0 },
                visitor_services: { label: 'Visitor Services', sequence: 1 },
                emergency_response: { label: 'Emergency Response', sequence: 2 },
                maintenance: { label: 'Maintenance', sequence: 3 },
                training: { label: 'Training', sequence: 4 }
            },
            dropdown: 'dropdown_with_none',
            mandatory: true
        }),
        assignment_status: ChoiceColumn({
            label: 'Assignment Status',
            choices: {
                scheduled: { label: 'Scheduled', sequence: 0 },
                active: { label: 'Active', sequence: 1 },
                completed: { label: 'Completed', sequence: 2 },
                cancelled: { label: 'Cancelled', sequence: 3 }
            },
            dropdown: 'dropdown_with_none',
            default: 'scheduled',
            mandatory: true
        }),
        assignment_notes: StringColumn({
            label: 'Notes',
            maxLength: 1000
        }),
        supervisor: ReferenceColumn({
            label: 'Supervisor',
            referenceTable: 'sys_user'
        })
    },
    display: 'number',
    extensible: false
})