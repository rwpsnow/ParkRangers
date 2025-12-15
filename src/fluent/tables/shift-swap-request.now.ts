import '@servicenow/sdk/global'
import { Table, ReferenceColumn, StringColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const x_snc_national_p_1_swap_request = Table({
    $id: Now.ID['swap_request_table'],
    name: 'x_snc_national_p_1_swap_request',
    label: 'Shift Swap Request',
    extends: 'task',
    schema: {
        original_assignment: ReferenceColumn({
            label: 'Original Assignment',
            referenceTable: 'x_snc_national_p_1_assignment',
            mandatory: true
        }),
        requesting_ranger: ReferenceColumn({
            label: 'Requesting Ranger',
            referenceTable: 'x_snc_national_p_1_ranger',
            mandatory: true
        }),
        accepting_ranger: ReferenceColumn({
            label: 'Accepting Ranger',
            referenceTable: 'x_snc_national_p_1_ranger'
        }),
        swap_reason: StringColumn({
            label: 'Swap Reason',
            maxLength: 500,
            mandatory: true
        }),
        approval_status: ChoiceColumn({
            label: 'Approval Status',
            choices: {
                pending: { label: 'Pending', sequence: 0 },
                approved: { label: 'Approved', sequence: 1 },
                denied: { label: 'Denied', sequence: 2 }
            },
            dropdown: 'dropdown_with_none',
            default: 'pending',
            mandatory: true
        }),
        approved_by: ReferenceColumn({
            label: 'Approved By',
            referenceTable: 'sys_user'
        })
    },
    display: 'number',
    extensible: false
})