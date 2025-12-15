import '@servicenow/sdk/global'
import { Role } from '@servicenow/sdk/core'

// Create the four application roles with proper hierarchy
export const rangerRole = Role({
    $id: Now.ID['ranger_role'],
    name: 'x_snc_national_p_1.ranger',
    description: 'Rangers can view their own profile, certifications, and assignments; request equipment; request shift swaps'
})

export const supervisorRole = Role({
    $id: Now.ID['supervisor_role'],
    name: 'x_snc_national_p_1.supervisor',
    description: 'Supervisors can manage team assignments; approve swap requests; view team certifications; issue equipment to rangers',
    contains_roles: [rangerRole]
})

export const equipmentManagerRole = Role({
    $id: Now.ID['equipment_manager_role'],
    name: 'x_snc_national_p_1.equipment_manager',
    description: 'Equipment managers can manage equipment inventory; process equipment issue and return; schedule maintenance',
    contains_roles: [rangerRole]
})

export const adminRole = Role({
    $id: Now.ID['admin_role'],
    name: 'x_snc_national_p_1.admin',
    description: 'Administrators have full application access; manage parks, zones, certification types, and equipment categories',
    contains_roles: [rangerRole, supervisorRole, equipmentManagerRole]
})