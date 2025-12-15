import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { 
    validateEquipmentCertification, 
    setEquipmentStatusOnIssue, 
    setEquipmentStatusOnReturn 
} from '../../server/equipment-business-rules.js'

// Equipment Certification Validation - Before Insert
BusinessRule({
    $id: Now.ID['br_equip_cert_validation'],
    name: 'Equipment Certification Validation',
    table: 'x_snc_national_p_1_equip_assignment',
    when: 'before',
    action: ['insert'],
    script: validateEquipmentCertification,
    order: 100,
    active: true,
    description: 'Prevent equipment from being issued to rangers who lack required certifications'
})

// Set Equipment Status on Issue - After Insert
BusinessRule({
    $id: Now.ID['br_equip_status_issue'],
    name: 'Set Equipment Status on Issue',
    table: 'x_snc_national_p_1_equip_assignment',
    when: 'after',
    action: ['insert'],
    script: setEquipmentStatusOnIssue,
    order: 100,
    active: true,
    description: 'Update equipment status when issued'
})

// Set Equipment Status on Return - After Update
BusinessRule({
    $id: Now.ID['br_equip_status_return'],
    name: 'Set Equipment Status on Return',
    table: 'x_snc_national_p_1_equip_assignment',
    when: 'after',
    action: ['update'],
    script: setEquipmentStatusOnReturn,
    condition: "current.getValue('actual_return') != previous.getValue('actual_return') && current.getValue('actual_return') != ''",
    order: 100,
    active: true,
    description: 'Update equipment status when returned based on condition'
})