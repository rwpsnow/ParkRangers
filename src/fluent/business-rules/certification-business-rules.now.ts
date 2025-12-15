import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { calculateCertificationExpiration } from '../../server/certification-business-rules.js'

// Auto-Calculate Certification Expiration - Before Insert
BusinessRule({
    $id: Now.ID['br_cert_expiration_calc'],
    name: 'Auto-Calculate Certification Expiration',
    table: 'x_snc_national_p_1_certification',
    when: 'before',
    action: ['insert'],
    script: calculateCertificationExpiration,
    condition: "current.getValue('expiration_date') == ''",
    order: 100,
    active: true,
    description: 'Automatically calculate expiration date based on certification type validity months'
})