import '@servicenow/sdk/global'
import { Table, StringColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_snc_national_p_1_equip_category = Table({
    $id: Now.ID['equip_category_table'],
    name: 'x_snc_national_p_1_equip_category',
    label: 'Equipment Category',
    schema: {
        name: StringColumn({
            label: 'Name',
            maxLength: 100,
            mandatory: true
        }),
        code: StringColumn({
            label: 'Code',
            maxLength: 20,
            mandatory: true
        }),
        description: StringColumn({
            label: 'Description',
            maxLength: 1000
        }),
        requires_certification: ReferenceColumn({
            label: 'Requires Certification',
            referenceTable: 'x_snc_national_p_1_cert_type'
        })
    },
    display: 'name',
    extensible: false
})