import '@servicenow/sdk/global'
import { Acl } from '@servicenow/sdk/core'
import { rangerRole, supervisorRole, equipmentManagerRole, adminRole } from '../roles/application-roles.now.ts'

// Park Table ACLs
Acl({
    $id: Now.ID['acl_park_read'],
    type: 'record',
    table: 'x_snc_national_p_1_park',
    field: '*',
    operation: 'read',
    roles: [rangerRole, supervisorRole, equipmentManagerRole, adminRole],
    description: 'All application users can read park information'
})

Acl({
    $id: Now.ID['acl_park_write'],
    type: 'record',
    table: 'x_snc_national_p_1_park',
    field: '*',
    operation: 'write',
    roles: [adminRole],
    description: 'Only admins can modify park information'
})

Acl({
    $id: Now.ID['acl_park_create'],
    type: 'record',
    table: 'x_snc_national_p_1_park',
    field: '*',
    operation: 'create',
    roles: [adminRole],
    description: 'Only admins can create parks'
})

Acl({
    $id: Now.ID['acl_park_delete'],
    type: 'record',
    table: 'x_snc_national_p_1_park',
    field: '*',
    operation: 'delete',
    roles: [adminRole],
    description: 'Only admins can delete parks'
})

// Zone Table ACLs
Acl({
    $id: Now.ID['acl_zone_read'],
    type: 'record',
    table: 'x_snc_national_p_1_zone',
    field: '*',
    operation: 'read',
    roles: [rangerRole, supervisorRole, equipmentManagerRole, adminRole],
    description: 'All application users can read zone information'
})

Acl({
    $id: Now.ID['acl_zone_write'],
    type: 'record',
    table: 'x_snc_national_p_1_zone',
    field: '*',
    operation: 'write',
    roles: [adminRole],
    description: 'Only admins can modify zone information'
})

Acl({
    $id: Now.ID['acl_zone_create'],
    type: 'record',
    table: 'x_snc_national_p_1_zone',
    field: '*',
    operation: 'create',
    roles: [adminRole],
    description: 'Only admins can create zones'
})

Acl({
    $id: Now.ID['acl_zone_delete'],
    type: 'record',
    table: 'x_snc_national_p_1_zone',
    field: '*',
    operation: 'delete',
    roles: [adminRole],
    description: 'Only admins can delete zones'
})

// Certification Type ACLs
Acl({
    $id: Now.ID['acl_cert_type_read'],
    type: 'record',
    table: 'x_snc_national_p_1_cert_type',
    field: '*',
    operation: 'read',
    roles: [rangerRole, supervisorRole, equipmentManagerRole, adminRole],
    description: 'All application users can read certification types'
})

Acl({
    $id: Now.ID['acl_cert_type_write'],
    type: 'record',
    table: 'x_snc_national_p_1_cert_type',
    field: '*',
    operation: 'write',
    roles: [adminRole],
    description: 'Only admins can modify certification types'
})

Acl({
    $id: Now.ID['acl_cert_type_create'],
    type: 'record',
    table: 'x_snc_national_p_1_cert_type',
    field: '*',
    operation: 'create',
    roles: [adminRole],
    description: 'Only admins can create certification types'
})

Acl({
    $id: Now.ID['acl_cert_type_delete'],
    type: 'record',
    table: 'x_snc_national_p_1_cert_type',
    field: '*',
    operation: 'delete',
    roles: [adminRole],
    description: 'Only admins can delete certification types'
})