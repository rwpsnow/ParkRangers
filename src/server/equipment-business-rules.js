import { gs, GlideRecord, GlideDateTime } from '@servicenow/glide'

/**
 * Equipment Certification Validation
 * Prevents equipment from being issued to rangers who lack required certifications
 */
export function validateEquipmentCertification(current, previous) {
    try {
        // Get the equipment record
        var equipmentGR = new GlideRecord('x_snc_national_p_1_equipment')
        equipmentGR.addQuery('sys_id', current.getValue('equipment'))
        equipmentGR.query()
        if (!equipmentGR.next()) {
            gs.addErrorMessage('Equipment record not found')
            current.setAbortAction(true)
            return
        }

        // Get the equipment's category
        var categoryGR = new GlideRecord('x_snc_national_p_1_equip_category')
        categoryGR.addQuery('sys_id', equipmentGR.getValue('category'))
        categoryGR.query()
        if (!categoryGR.next()) {
            // No category means no certification required
            return
        }

        // Check if the category has a required certification
        if (categoryGR.getValue('requires_certification') == '') {
            // No certification required
            return
        }

        // Check if the ranger has the required certification
        var certGR = new GlideRecord('x_snc_national_p_1_certification')
        certGR.addQuery('ranger', current.getValue('ranger'))
        certGR.addQuery('certification_type', categoryGR.getValue('requires_certification'))
        certGR.addQuery('status', 'active')
        
        // Check if certification is not expired
        var now = new GlideDateTime()
        certGR.addQuery('expiration_date', '>', now.getDisplayValue())
        certGR.query()

        if (!certGR.hasNext()) {
            var equipmentName = equipmentGR.getValue('name')
            var rangerName = current.getDisplayValue('ranger')
            var certName = categoryGR.getDisplayValue('requires_certification')
            
            gs.addErrorMessage('Cannot issue ' + equipmentName + '. Ranger ' + rangerName + ' does not hold an active ' + certName + ' certification.')
            current.setAbortAction(true)
        }
    } catch (e) {
        gs.error('Error in validateEquipmentCertification: ' + e.message)
        current.setAbortAction(true)
    }
}

/**
 * Set Equipment Status on Issue
 * Updates equipment status when issued
 */
export function setEquipmentStatusOnIssue(current, previous) {
    try {
        var equipmentGR = new GlideRecord('x_snc_national_p_1_equipment')
        equipmentGR.addQuery('sys_id', current.getValue('equipment'))
        equipmentGR.query()
        if (equipmentGR.next()) {
            equipmentGR.setValue('equipment_status', 'issued')
            equipmentGR.update()
        }
    } catch (e) {
        gs.error('Error in setEquipmentStatusOnIssue: ' + e.message)
    }
}

/**
 * Set Equipment Status on Return
 * Updates equipment status when returned based on condition
 */
export function setEquipmentStatusOnReturn(current, previous) {
    try {
        // Check if actual_return field changed from empty to populated
        if (previous.getValue('actual_return') == '' && current.getValue('actual_return') != '') {
            var equipmentGR = new GlideRecord('x_snc_national_p_1_equipment')
            equipmentGR.addQuery('sys_id', current.getValue('equipment'))
            equipmentGR.query()
            if (equipmentGR.next()) {
                var returnCondition = current.getValue('return_condition')
                
                if (returnCondition === 'damaged') {
                    equipmentGR.setValue('equipment_status', 'in_maintenance')
                } else if (returnCondition === 'lost') {
                    equipmentGR.setValue('equipment_status', 'lost')
                } else {
                    equipmentGR.setValue('equipment_status', 'available')
                }
                
                equipmentGR.update()
            }
        }
    } catch (e) {
        gs.error('Error in setEquipmentStatusOnReturn: ' + e.message)
    }
}