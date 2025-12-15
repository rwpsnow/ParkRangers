import { gs, GlideRecord } from '@servicenow/glide'

/**
 * Check if user can access their own ranger profile or team members if supervisor
 */
export function canAccessRangerProfile(current, previous) {
    try {
        // Get current user
        var userId = gs.getUserID()
        
        // Check if this is the user's own profile
        if (current.getValue('user') === userId) {
            return true
        }
        
        // Check if user is a supervisor of this ranger's park
        var userGR = new GlideRecord('sys_user')
        userGR.addQuery('sys_id', userId)
        userGR.query()
        
        if (userGR.next()) {
            // Check if user has supervisor role
            if (userGR.hasRole('x_snc_national_p_1.supervisor')) {
                // Check if ranger is in the same park as supervisor
                var rangerGR = new GlideRecord('x_snc_national_p_1_ranger')
                rangerGR.addQuery('user', userId)
                rangerGR.query()
                
                if (rangerGR.next()) {
                    // Same park check
                    return rangerGR.getValue('primary_park') === current.getValue('primary_park')
                }
            }
        }
        
        return false
    } catch (e) {
        gs.error('Error in canAccessRangerProfile: ' + e.message)
        return false
    }
}

/**
 * Check if user can access assignment (own assignments or team assignments for supervisors)
 */
export function canAccessAssignment(current, previous) {
    try {
        var userId = gs.getUserID()
        
        // Get ranger record for current user
        var rangerGR = new GlideRecord('x_snc_national_p_1_ranger')
        rangerGR.addQuery('user', userId)
        rangerGR.query()
        
        if (rangerGR.next()) {
            // Check if this is user's own assignment
            if (current.getValue('ranger') === rangerGR.getUniqueValue()) {
                return true
            }
            
            // Check if user has supervisor role and assignment is in their park
            if (gs.hasRole('x_snc_national_p_1.supervisor')) {
                var assignmentRangerGR = new GlideRecord('x_snc_national_p_1_ranger')
                assignmentRangerGR.addQuery('sys_id', current.getValue('ranger'))
                assignmentRangerGR.query()
                
                if (assignmentRangerGR.next()) {
                    return rangerGR.getValue('primary_park') === assignmentRangerGR.getValue('primary_park')
                }
            }
        }
        
        return false
    } catch (e) {
        gs.error('Error in canAccessAssignment: ' + e.message)
        return false
    }
}

/**
 * Check if user can access equipment assignment (own assignments, team for supervisors, all for equipment managers)
 */
export function canAccessEquipmentAssignment(current, previous) {
    try {
        var userId = gs.getUserID()
        
        // Equipment managers can access all
        if (gs.hasRole('x_snc_national_p_1.equipment_manager')) {
            return true
        }
        
        // Get ranger record for current user
        var rangerGR = new GlideRecord('x_snc_national_p_1_ranger')
        rangerGR.addQuery('user', userId)
        rangerGR.query()
        
        if (rangerGR.next()) {
            // Check if this is user's own equipment assignment
            if (current.getValue('ranger') === rangerGR.getUniqueValue()) {
                return true
            }
            
            // Check if user has supervisor role and assignment is in their park
            if (gs.hasRole('x_snc_national_p_1.supervisor')) {
                var assignmentRangerGR = new GlideRecord('x_snc_national_p_1_ranger')
                assignmentRangerGR.addQuery('sys_id', current.getValue('ranger'))
                assignmentRangerGR.query()
                
                if (assignmentRangerGR.next()) {
                    return rangerGR.getValue('primary_park') === assignmentRangerGR.getValue('primary_park')
                }
            }
        }
        
        return false
    } catch (e) {
        gs.error('Error in canAccessEquipmentAssignment: ' + e.message)
        return false
    }
}