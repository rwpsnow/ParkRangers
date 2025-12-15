import '@servicenow/sdk/global'

// Import all application roles
import './roles/application-roles.now.ts'

// Import all tables  
import './tables/park.now.ts'
import './tables/certification-type.now.ts'
import './tables/zone.now.ts'
import './tables/ranger-profile.now.ts'
import './tables/ranger-certification.now.ts'
import './tables/assignment.now.ts'
import './tables/equipment-category.now.ts'
import './tables/equipment-item.now.ts'
import './tables/equipment-assignment.now.ts'
import './tables/shift-swap-request.now.ts'
import './tables/equipment-maintenance.now.ts'

// Import all business rules
import './business-rules/equipment-business-rules.now.ts'
import './business-rules/certification-business-rules.now.ts'

// Import all ACLs
import './acls/basic-tables-acls.now.ts'
import './acls/ranger-access-acls.now.ts'
import './acls/equipment-access-acls.now.ts'