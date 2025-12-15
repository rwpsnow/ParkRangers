import { gs, GlideRecord, GlideDateTime } from '@servicenow/glide'

/**
 * Auto-Calculate Certification Expiration
 * Automatically calculates expiration date based on validity months
 */
export function calculateCertificationExpiration(current, previous) {
    try {
        // Only calculate if expiration_date is empty
        if (current.getValue('expiration_date') != '') {
            return
        }

        // Get validity_months from the referenced certification_type
        var certTypeGR = new GlideRecord('x_snc_national_p_1_cert_type')
        certTypeGR.addQuery('sys_id', current.getValue('certification_type'))
        certTypeGR.query()
        if (!certTypeGR.next()) {
            gs.error('Certification type not found for certification: ' + current.getUniqueValue())
            return
        }

        var validityMonths = parseInt(certTypeGR.getValue('validity_months'))
        if (isNaN(validityMonths) || validityMonths <= 0) {
            gs.error('Invalid validity months for certification type: ' + certTypeGR.getValue('name'))
            return
        }

        // Calculate expiration date
        var issueDate = new GlideDateTime(current.getValue('issue_date'))
        issueDate.addMonths(validityMonths)
        current.setValue('expiration_date', issueDate.getDisplayValue())

    } catch (e) {
        gs.error('Error in calculateCertificationExpiration: ' + e.message)
    }
}