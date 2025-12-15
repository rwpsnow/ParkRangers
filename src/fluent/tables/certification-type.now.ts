import '@servicenow/sdk/global'
import { Table, StringColumn, IntegerColumn } from '@servicenow/sdk/core'

export const x_snc_national_p_1_cert_type = Table({
    $id: Now.ID['cert_type_table'],
    name: 'x_snc_national_p_1_cert_type',
    label: 'Certification Type',
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
        issuing_authority: StringColumn({
            label: 'Issuing Authority',
            maxLength: 100
        }),
        validity_months: IntegerColumn({
            label: 'Validity Period (Months)',
            min: 1,
            max: 120,
            mandatory: true
        }),
        description: StringColumn({
            label: 'Description',
            maxLength: 1000
        })
    },
    display: 'name',
    extensible: false
})