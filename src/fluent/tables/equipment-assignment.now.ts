import '@servicenow/sdk/global'
import { Table, ReferenceColumn, DateTimeColumn, ChoiceColumn, StringColumn } from '@servicenow/sdk/core'

export const x_snc_national_p_1_equip_assignment = Table({
    $id: Now.ID['equip_assignment_table'],
    name: 'x_snc_national_p_1_equip_assignment',
    label: 'Equipment Assignment',
    extends: 'task',
    schema: {
        equipment: ReferenceColumn({
            label: 'Equipment',
            referenceTable: 'x_snc_national_p_1_equipment',
            mandatory: true
        }),
        ranger: ReferenceColumn({
            label: 'Ranger',
            referenceTable: 'x_snc_national_p_1_ranger',
            mandatory: true
        }),
        issued_by: ReferenceColumn({
            label: 'Issued By',
            referenceTable: 'sys_user',
            mandatory: true
        }),
        issue_date: DateTimeColumn({
            label: 'Issue Date',
            mandatory: true
        }),
        expected_return: DateTimeColumn({
            label: 'Expected Return'
        }),
        actual_return: DateTimeColumn({
            label: 'Actual Return'
        }),
        return_condition: ChoiceColumn({
            label: 'Return Condition',
            choices: {
                good: { label: 'Good', sequence: 0 },
                damaged: { label: 'Damaged', sequence: 1 },
                lost: { label: 'Lost', sequence: 2 }
            },
            dropdown: 'dropdown_with_none'
        }),
        assignment_status: ChoiceColumn({
            label: 'Assignment Status',
            choices: {
                active: { label: 'Active', sequence: 0 },
                returned: { label: 'Returned', sequence: 1 },
                overdue: { label: 'Overdue', sequence: 2 },
                lost: { label: 'Lost', sequence: 3 }
            },
            dropdown: 'dropdown_with_none',
            default: 'active',
            mandatory: true
        }),
        issue_notes: StringColumn({
            label: 'Issue Notes',
            maxLength: 1000
        }),
        return_notes: StringColumn({
            label: 'Return Notes',
            maxLength: 1000
        })
    },
    display: 'number',
    extensible: false
})