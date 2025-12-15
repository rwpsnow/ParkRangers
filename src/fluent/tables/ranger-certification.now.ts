import '@servicenow/sdk/global'
import { Table, ReferenceColumn, DateColumn, ChoiceColumn, StringColumn } from '@servicenow/sdk/core'

export const x_snc_national_p_1_certification = Table({
    $id: Now.ID['certification_table'],
    name: 'x_snc_national_p_1_certification',
    label: 'Ranger Certification',
    schema: {
        ranger: ReferenceColumn({
            label: 'Ranger',
            referenceTable: 'x_snc_national_p_1_ranger',
            mandatory: true
        }),
        certification_type: ReferenceColumn({
            label: 'Certification Type',
            referenceTable: 'x_snc_national_p_1_cert_type',
            mandatory: true
        }),
        issue_date: DateColumn({
            label: 'Issue Date',
            mandatory: true
        }),
        expiration_date: DateColumn({
            label: 'Expiration Date'
        }),
        status: ChoiceColumn({
            label: 'Status',
            choices: {
                active: { label: 'Active', sequence: 0 },
                expired: { label: 'Expired', sequence: 1 },
                pending_renewal: { label: 'Pending Renewal', sequence: 2 }
            },
            dropdown: 'dropdown_with_none',
            default: 'active',
            mandatory: true
        }),
        certificate_number: StringColumn({
            label: 'Certificate Number',
            maxLength: 50
        })
    },
    display: 'certification_type',
    extensible: false
})