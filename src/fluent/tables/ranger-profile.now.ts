import '@servicenow/sdk/global'
import { Table, StringColumn, ReferenceColumn, DateColumn, ChoiceColumn, ListColumn } from '@servicenow/sdk/core'

export const x_snc_national_p_1_ranger = Table({
    $id: Now.ID['ranger_table'],
    name: 'x_snc_national_p_1_ranger',
    label: 'Ranger Profile',
    schema: {
        ranger_id: StringColumn({
            label: 'Ranger ID',
            maxLength: 20,
            read_only: true,
            default: 'javascript:new GlideSysUUID().generateDisplayValue();'
        }),
        user: ReferenceColumn({
            label: 'User',
            referenceTable: 'sys_user',
            mandatory: true
        }),
        badge_number: StringColumn({
            label: 'Badge Number',
            maxLength: 20,
            mandatory: true
        }),
        hire_date: DateColumn({
            label: 'Hire Date',
            mandatory: true
        }),
        primary_park: ReferenceColumn({
            label: 'Primary Park',
            referenceTable: 'x_snc_national_p_1_park',
            mandatory: true
        }),
        specializations: ListColumn({
            label: 'Specializations',
            referenceTable: 'sys_choice'
        }),
        status: ChoiceColumn({
            label: 'Status',
            choices: {
                active: { label: 'Active', sequence: 0 },
                on_leave: { label: 'On Leave', sequence: 1 },
                inactive: { label: 'Inactive', sequence: 2 }
            },
            dropdown: 'dropdown_with_none',
            default: 'active',
            mandatory: true
        }),
        emergency_contact: StringColumn({
            label: 'Emergency Contact',
            maxLength: 200
        })
    },
    display: 'ranger_id',
    auto_number: {
        prefix: 'RGR',
        number: 1,
        number_of_digits: 7
    },
    extensible: false
})