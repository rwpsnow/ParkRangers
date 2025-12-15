import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'
import { rangerRole, supervisorRole, equipmentManagerRole, adminRole } from '../roles/application-roles.now.ts'
import { canAccessEquipmentAssignment } from '../../server/acl-scripts.js'

// Equipment Category ACLs
Acl({
    $id: Now.ID['acl_equip_cat_read'],
    type: 'record',
    table: 'x_snc_national_p_1_equip_category',
    field: '*',
    operation: 'read',
    roles: [rangerRole, supervisorRole, equipmentManagerRole, adminRole],
    description: 'All application users can read equipment categories'
})

Acl({
    $id: Now.ID['acl_equip_cat_write'],
    type: 'record',
    table: 'x_snc_national_p_1_equip_category',
    field: '*',
    operation: 'write',
    roles: [adminRole],
    description: 'Only admins can modify equipment categories'
})

Acl({
    $id: Now.ID['acl_equip_cat_create'],
    type: 'record',
    table: 'x_snc_national_p_1_equip_category',
    field: '*',
    operation: 'create',
    roles: [adminRole],
    description: 'Only admins can create equipment categories'
})

// Equipment Item ACLs
Acl({
    $id: Now.ID['acl_equip_read'],
    type: 'record',
    table: 'x_snc_national_p_1_equipment',
    field: '*',
    operation: 'read',
    roles: [rangerRole, supervisorRole, equipmentManagerRole, adminRole],
    description: 'All application users can read equipment information'
})

Acl({
    $id: Now.ID['acl_equip_write'],
    type: 'record',
    table: 'x_snc_national_p_1_equipment',
    field: '*',
    operation: 'write',
    roles: [equipmentManagerRole, adminRole],
    description: 'Equipment managers and admins can modify equipment'
})

Acl({
    $id: Now.ID['acl_equip_create'],
    type: 'record',
    table: 'x_snc_national_p_1_equipment',
    field: '*',
    operation: 'create',
    roles: [equipmentManagerRole, adminRole],
    description: 'Equipment managers and admins can create equipment records'
})

// Equipment Assignment ACLs
Acl({
    $id: Now.ID['acl_equip_assign_read'],
    type: 'record',
    table: 'x_snc_national_p_1_equip_assignment',
    field: '*',
    operation: 'read',
    script: canAccessEquipmentAssignment,
    roles: [rangerRole],
    description: 'Rangers can read their own assignments; supervisors can read team assignments; equipment managers can read all'
})

Acl({
    $id: Now.ID['acl_equip_assign_write'],
    type: 'record',
    table: 'x_snc_national_p_1_equip_assignment',
    field: '*',
    operation: 'write',
    roles: [supervisorRole, equipmentManagerRole, adminRole],
    description: 'Supervisors, equipment managers, and admins can modify equipment assignments'
})

Acl({
    $id: Now.ID['acl_equip_assign_create'],
    type: 'record',
    table: 'x_snc_national_p_1_equip_assignment',
    field: '*',
    operation: 'create',
    roles: [supervisorRole, equipmentManagerRole, adminRole],
    description: 'Supervisors, equipment managers, and admins can create equipment assignments'
})

// Equipment Maintenance ACLs
Acl({
    $id: Now.ID['acl_equip_maint_read'],
    type: 'record',
    table: 'x_snc_national_p_1_equip_maintenance',
    field: '*',
    operation: 'read',
    roles: [supervisorRole, equipmentManagerRole, adminRole],
    description: 'Supervisors, equipment managers, and admins can read maintenance records'
})

Acl({
    $id: Now.ID['acl_equip_maint_write'],
    type: 'record',
    table: 'x_snc_national_p_1_equip_maintenance',
    field: '*',
    operation: 'write',
    roles: [equipmentManagerRole, adminRole],
    description: 'Equipment managers and admins can modify maintenance records'
})

Acl({
    $id: Now.ID['acl_equip_maint_create'],
    type: 'record',
    table: 'x_snc_national_p_1_equip_maintenance',
    field: '*',
    operation: 'create',
    roles: [equipmentManagerRole, adminRole],
    description: 'Equipment managers and admins can create maintenance records'
})