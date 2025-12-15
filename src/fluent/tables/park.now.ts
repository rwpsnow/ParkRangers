import '@servicenow/sdk/global'
import { Table, StringColumn, ChoiceColumn, IntegerColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_snc_national_p_1_park = Table({
    $id: Now.ID['park_table'],
    name: 'x_snc_national_p_1_park',
    label: 'Park',
    extends: 'cmn_location',
    schema: {
        park_code: StringColumn({
            label: 'Park Code',
            maxLength: 10,
            mandatory: true
        }),
        region: ChoiceColumn({
            label: 'Region',
            choices: {
                pacific_west: { label: 'Pacific West', sequence: 0 },
                intermountain: { label: 'Intermountain', sequence: 1 },
                northeast: { label: 'Northeast', sequence: 2 },
                southeast: { label: 'Southeast', sequence: 3 },
                midwest: { label: 'Midwest', sequence: 4 },
                alaska: { label: 'Alaska', sequence: 5 }
            },
            dropdown: 'dropdown_with_none',
            mandatory: true
        }),
        acreage: IntegerColumn({
            label: 'Acreage',
            min: 0
        }),
        visitor_center_phone: StringColumn({
            label: 'Visitor Center Phone',
            maxLength: 40
        }),
        superintendent: ReferenceColumn({
            label: 'Superintendent',
            referenceTable: 'sys_user'
        })
    },
    display: 'park_code',
    extensible: true
})