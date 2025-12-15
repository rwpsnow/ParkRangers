import '@servicenow/sdk/global'
import { Table, StringColumn, ChoiceColumn, ReferenceColumn, IntegerColumn, ListColumn } from '@servicenow/sdk/core'

export const x_snc_national_p_1_zone = Table({
    $id: Now.ID['zone_table'],
    name: 'x_snc_national_p_1_zone',
    label: 'Zone',
    extends: 'cmn_location',
    schema: {
        zone_code: StringColumn({
            label: 'Zone Code',
            maxLength: 20,
            mandatory: true
        }),
        park: ReferenceColumn({
            label: 'Park',
            referenceTable: 'x_snc_national_p_1_park',
            mandatory: true
        }),
        zone_type: ChoiceColumn({
            label: 'Zone Type',
            choices: {
                wilderness: { label: 'Wilderness', sequence: 0 },
                developed: { label: 'Developed', sequence: 1 },
                backcountry: { label: 'Backcountry', sequence: 2 },
                visitor_services: { label: 'Visitor Services', sequence: 3 }
            },
            dropdown: 'dropdown_with_none',
            mandatory: true
        }),
        hazard_level: ChoiceColumn({
            label: 'Hazard Level',
            choices: {
                low: { label: 'Low', sequence: 0 },
                moderate: { label: 'Moderate', sequence: 1 },
                high: { label: 'High', sequence: 2 },
                extreme: { label: 'Extreme', sequence: 3 }
            },
            dropdown: 'dropdown_with_none',
            mandatory: true
        }),
        required_certifications: ListColumn({
            label: 'Required Certifications',
            referenceTable: 'x_snc_national_p_1_cert_type'
        }),
        ranger_capacity: IntegerColumn({
            label: 'Ranger Capacity',
            min: 1,
            mandatory: true
        })
    },
    display: 'zone_code',
    extensible: false
})