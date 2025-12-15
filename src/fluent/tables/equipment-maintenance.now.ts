import '@servicenow/sdk/global'
import { Table, ReferenceColumn, ChoiceColumn, DateColumn, StringColumn, DecimalColumn } from '@servicenow/sdk/core'

export const x_snc_national_p_1_equip_maintenance = Table({
    $id: Now.ID['equip_maintenance_table'],
    name: 'x_snc_national_p_1_equip_maintenance',
    label: 'Equipment Maintenance',
    extends: 'task',
    schema: {
        equipment: ReferenceColumn({
            label: 'Equipment',
            referenceTable: 'x_snc_national_p_1_equipment',
            mandatory: true
        }),
        maintenance_type: ChoiceColumn({
            label: 'Maintenance Type',
            choices: {
                routine_inspection: { label: 'Routine Inspection', sequence: 0 },
                repair: { label: 'Repair', sequence: 1 },
                calibration: { label: 'Calibration', sequence: 2 },
                cleaning: { label: 'Cleaning', sequence: 3 },
                replacement: { label: 'Replacement', sequence: 4 }
            },
            dropdown: 'dropdown_with_none',
            mandatory: true
        }),
        scheduled_date: DateColumn({
            label: 'Scheduled Date'
        }),
        completed_date: DateColumn({
            label: 'Completed Date'
        }),
        performed_by: ReferenceColumn({
            label: 'Performed By',
            referenceTable: 'sys_user'
        }),
        findings: StringColumn({
            label: 'Findings',
            maxLength: 2000
        }),
        actions_taken: StringColumn({
            label: 'Actions Taken',
            maxLength: 2000
        }),
        parts_cost: DecimalColumn({
            label: 'Parts Cost'
        }),
        labor_cost: DecimalColumn({
            label: 'Labor Cost'
        }),
        maintenance_status: ChoiceColumn({
            label: 'Maintenance Status',
            choices: {
                scheduled: { label: 'Scheduled', sequence: 0 },
                in_progress: { label: 'In Progress', sequence: 1 },
                completed: { label: 'Completed', sequence: 2 },
                cancelled: { label: 'Cancelled', sequence: 3 }
            },
            dropdown: 'dropdown_with_none',
            default: 'scheduled',
            mandatory: true
        }),
        next_maintenance_date: DateColumn({
            label: 'Next Maintenance Date'
        })
    },
    display: 'number',
    extensible: false
})