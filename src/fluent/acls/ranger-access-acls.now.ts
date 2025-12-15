import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'
import { rangerRole, supervisorRole, adminRole } from '../roles/application-roles.now.ts'
import { 
    canAccessRangerProfile, 
    canAccessAssignment
} from '../../server/acl-scripts.js'

// Ranger Profile ACLs - Self and team access
Acl({
    $id: Now.ID['acl_ranger_read'],
    type: 'record',
    table: 'x_snc_national_p_1_ranger',
    field: '*',
    operation: 'read',
    script: canAccessRangerProfile,
    roles: [rangerRole],
    description: 'Rangers can read their own profile; supervisors can read team profiles'
})

Acl({
    $id: Now.ID['acl_ranger_write'],
    type: 'record',
    table: 'x_snc_national_p_1_ranger',
    field: '*',
    operation: 'write',
    roles: [adminRole],
    description: 'Only admins can modify ranger profiles'
})

Acl({
    $id: Now.ID['acl_ranger_create'],
    type: 'record',
    table: 'x_snc_national_p_1_ranger',
    field: '*',
    operation: 'create',
    roles: [adminRole],
    description: 'Only admins can create ranger profiles'
})

// Ranger Certification ACLs - Similar access pattern as ranger profiles
Acl({
    $id: Now.ID['acl_cert_read'],
    type: 'record',
    table: 'x_snc_national_p_1_certification',
    field: '*',
    operation: 'read',
    script: canAccessRangerProfile,
    roles: [rangerRole],
    description: 'Rangers can read their own certifications; supervisors can read team certifications'
})

Acl({
    $id: Now.ID['acl_cert_write'],
    type: 'record',
    table: 'x_snc_national_p_1_certification',
    field: '*',
    operation: 'write',
    roles: [adminRole],
    description: 'Only admins can modify certifications'
})

Acl({
    $id: Now.ID['acl_cert_create'],
    type: 'record',
    table: 'x_snc_national_p_1_certification',
    field: '*',
    operation: 'create',
    roles: [adminRole],
    description: 'Only admins can create certifications'
})

// Assignment ACLs - Self and team access
Acl({
    $id: Now.ID['acl_assignment_read'],
    type: 'record',
    table: 'x_snc_national_p_1_assignment',
    field: '*',
    operation: 'read',
    script: canAccessAssignment,
    roles: [rangerRole],
    description: 'Rangers can read their own assignments; supervisors can read team assignments'
})

Acl({
    $id: Now.ID['acl_assignment_write'],
    type: 'record',
    table: 'x_snc_national_p_1_assignment',
    field: '*',
    operation: 'write',
    roles: [supervisorRole, adminRole],
    description: 'Supervisors and admins can modify assignments'
})

Acl({
    $id: Now.ID['acl_assignment_create'],
    type: 'record',
    table: 'x_snc_national_p_1_assignment',
    field: '*',
    operation: 'create',
    roles: [supervisorRole, adminRole],
    description: 'Supervisors and admins can create assignments'
})

// Shift Swap Request ACLs
Acl({
    $id: Now.ID['acl_swap_read'],
    type: 'record',
    table: 'x_snc_national_p_1_swap_request',
    field: '*',
    operation: 'read',
    script: canAccessAssignment,
    roles: [rangerRole],
    description: 'Rangers can read their own swap requests; supervisors can read team requests'
})

Acl({
    $id: Now.ID['acl_swap_create'],
    type: 'record',
    table: 'x_snc_national_p_1_swap_request',
    field: '*',
    operation: 'create',
    roles: [rangerRole],
    description: 'Rangers can create swap requests'
})

Acl({
    $id: Now.ID['acl_swap_write'],
    type: 'record',
    table: 'x_snc_national_p_1_swap_request',
    field: '*',
    operation: 'write',
    roles: [supervisorRole, adminRole],
    description: 'Supervisors and admins can approve/modify swap requests'
})