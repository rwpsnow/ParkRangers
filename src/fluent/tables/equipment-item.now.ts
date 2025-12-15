import '@servicenow/sdk/global'
import { Table, StringColumn, ReferenceColumn, ChoiceColumn, DateColumn, DecimalColumn, IntegerColumn } from '@servicenow/sdk/core'

export const x_snc_national_p_1_equipment = Table({
    $id: Now.ID['equipment_table'],
    name: 'x_snc_national_p_1_equipment',
    label: 'Equipment Item',
    schema: {
        asset_tag: StringColumn({
            label: 'Asset Tag',
            maxLength: 30,
            read_only: true
        }),
        name: StringColumn({
            label: 'Name',
            maxLength: 100,
            mandatory: true
        }),
        category: ReferenceColumn({
            label: 'Category',
            referenceTable: 'x_snc_national_p_1_equip_category',
            mandatory: true
        }),
        serial_number: StringColumn({
            label: 'Serial Number',
            maxLength: 50
        }),
        make: StringColumn({
            label: 'Make',
            maxLength: 50
        }),
        model_number: StringColumn({
            label: 'Model',
            maxLength: 50
        }),
        park: ReferenceColumn({
            label: 'Park',
            referenceTable: 'x_snc_national_p_1_park',
            mandatory: true
        }),
        condition: ChoiceColumn({
            label: 'Condition',
            choices: {
                new: { label: 'New', sequence: 0 },
                good: { label: 'Good', sequence: 1 },
                fair: { label: 'Fair', sequence: 2 },
                poor: { label: 'Poor', sequence: 3 },
                decommissioned: { label: 'Decommissioned', sequence: 4 }
            },
            dropdown: 'dropdown_with_none',
            default: 'good',
            mandatory: true
        }),
        equipment_status: ChoiceColumn({
            label: 'Equipment Status',
            choices: {
                available: { label: 'Available', sequence: 0 },
                issued: { label: 'Issued', sequence: 1 },
                in_maintenance: { label: 'In Maintenance', sequence: 2 },
                lost: { label: 'Lost', sequence: 3 },
                retired: { label: 'Retired', sequence: 4 }
            },
            dropdown: 'dropdown_with_none',
            default: 'available',
            mandatory: true
        }),
        purchase_date: DateColumn({
            label: 'Purchase Date'
        }),
        purchase_cost: DecimalColumn({
            label: 'Purchase Cost'
        }),
        warranty_expiration: DateColumn({
            label: 'Warranty Expiration'
        }),
        last_inspection: DateColumn({
            label: 'Last Inspection'
        }),
        next_inspection_due: DateColumn({
            label: 'Next Inspection Due'
        }),
        inspection_interval_days: IntegerColumn({
            label: 'Inspection Interval (Days)',
            min: 1,
            default: '365'
        }),
        notes: StringColumn({
            label: 'Notes',
            maxLength: 1000
        })
    },
    display: 'name',
    auto_number: {
        prefix: 'NPS-EQ-',
        number: 1,
        number_of_digits: 7
    },
    extensible: false
})