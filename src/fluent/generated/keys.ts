import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '0984bc562ff5ba1ce06c453bcfa4e365': {
                        table: 'sys_scope_privilege'
                        id: '0984bc562ff5ba1ce06c453bcfa4e365'
                    }
                    '4984bc562ff5ba1ce06c453bcfa4e30a': {
                        table: 'sys_scope_privilege'
                        id: '4984bc562ff5ba1ce06c453bcfa4e30a'
                    }
                    '8d84bc562ff5ba1ce06c453bcfa4e311': {
                        table: 'sys_scope_privilege'
                        id: '8d84bc562ff5ba1ce06c453bcfa4e311'
                    }
                    acl_assignment_create: {
                        table: 'sys_security_acl'
                        id: '2b2db67833fd4e9ebc47693a41eea016'
                    }
                    acl_assignment_read: {
                        table: 'sys_security_acl'
                        id: 'bb15b749c00242228a67e76cbc1235bc'
                    }
                    acl_assignment_write: {
                        table: 'sys_security_acl'
                        id: '846453b008f84d2ca7b12d61e5c5d120'
                    }
                    acl_cert_create: {
                        table: 'sys_security_acl'
                        id: '0ba6465bcc604fedb4066ff0a973d275'
                    }
                    acl_cert_read: {
                        table: 'sys_security_acl'
                        id: '37abbaf94d094b5cb14542f4ba60888b'
                    }
                    acl_cert_type_create: {
                        table: 'sys_security_acl'
                        id: 'd80767818ab44c6285cbe6701f93be0e'
                    }
                    acl_cert_type_delete: {
                        table: 'sys_security_acl'
                        id: '5e0bded02bd4491f8c7470a251cdf880'
                    }
                    acl_cert_type_read: {
                        table: 'sys_security_acl'
                        id: '034d8116f11e41048ff43b431984b190'
                    }
                    acl_cert_type_write: {
                        table: 'sys_security_acl'
                        id: '02c054d0ec464670b40c9d22a081e777'
                    }
                    acl_cert_write: {
                        table: 'sys_security_acl'
                        id: 'a5f0abfbe2864b46b39524b411f96e8e'
                    }
                    acl_equip_assign_create: {
                        table: 'sys_security_acl'
                        id: '4205aecce4e54c649fed5db725aeed15'
                    }
                    acl_equip_assign_read: {
                        table: 'sys_security_acl'
                        id: '0a250570dfad4fd3a26055bb4fb7c781'
                    }
                    acl_equip_assign_write: {
                        table: 'sys_security_acl'
                        id: '9e4000ffec044cf5abe650692eb6d9d8'
                    }
                    acl_equip_cat_create: {
                        table: 'sys_security_acl'
                        id: 'a765f1f810b44b88880cfdecdaaf2515'
                    }
                    acl_equip_cat_read: {
                        table: 'sys_security_acl'
                        id: 'b3e86533bb894e1fa17c3bb89e0a64a2'
                    }
                    acl_equip_cat_write: {
                        table: 'sys_security_acl'
                        id: '61fa50cb92cf4e49b30e91d4bb29666f'
                    }
                    acl_equip_create: {
                        table: 'sys_security_acl'
                        id: 'b1b36d3b4b01466ab37dac93d84a241a'
                    }
                    acl_equip_maint_create: {
                        table: 'sys_security_acl'
                        id: 'c2f8f535999646728c3846542d7b2bb7'
                    }
                    acl_equip_maint_read: {
                        table: 'sys_security_acl'
                        id: '6230c0891db94e8d8bf26db7b89f85bd'
                    }
                    acl_equip_maint_write: {
                        table: 'sys_security_acl'
                        id: '6e41420e8e1f4bed9a0224f1e5627689'
                    }
                    acl_equip_read: {
                        table: 'sys_security_acl'
                        id: 'd3e565c6e9a547628d8324cf342619ed'
                    }
                    acl_equip_write: {
                        table: 'sys_security_acl'
                        id: 'a21e59ead5484f4b9cd2617ac80d8c61'
                    }
                    acl_park_create: {
                        table: 'sys_security_acl'
                        id: '17632b2f5fd94a80a1904340ed81246f'
                    }
                    acl_park_delete: {
                        table: 'sys_security_acl'
                        id: 'c8a73e43516a4725b3dc55534e71e7f6'
                    }
                    acl_park_read: {
                        table: 'sys_security_acl'
                        id: '0a59d39dbc2f4e94b7fb721878b66a6e'
                    }
                    acl_park_write: {
                        table: 'sys_security_acl'
                        id: '21e8042ede7a4e8ebe582cd35c4d6184'
                    }
                    acl_ranger_create: {
                        table: 'sys_security_acl'
                        id: '09f32e50016f46d3804f70e0dec8c196'
                    }
                    acl_ranger_read: {
                        table: 'sys_security_acl'
                        id: '48fc5f74d0e84d45aab2742df1e59eb4'
                    }
                    acl_ranger_write: {
                        table: 'sys_security_acl'
                        id: 'a0b3a4ff0ae94304b30d1273715c2982'
                    }
                    acl_swap_create: {
                        table: 'sys_security_acl'
                        id: '3ac54ee504c043a69fbc68c6baaa4cda'
                    }
                    acl_swap_read: {
                        table: 'sys_security_acl'
                        id: '45f8c7a537094c4cbb72748fb2945e9d'
                    }
                    acl_swap_write: {
                        table: 'sys_security_acl'
                        id: '10e95ff905fe43debb6b0239442794c1'
                    }
                    acl_zone_create: {
                        table: 'sys_security_acl'
                        id: 'fe3ca551549e4ac890a1812f756f6a82'
                    }
                    acl_zone_delete: {
                        table: 'sys_security_acl'
                        id: 'dadf398d12b74d28aefc459caaffdde1'
                    }
                    acl_zone_read: {
                        table: 'sys_security_acl'
                        id: 'dd21df3dd8c4439695100272a7d97ffb'
                    }
                    acl_zone_write: {
                        table: 'sys_security_acl'
                        id: 'c8e7a60bf908461cb0edee2b234e34ae'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '9c405234804f4803bb6c17748c64bc58'
                    }
                    br_cert_expiration_calc: {
                        table: 'sys_script'
                        id: 'df5580b3174949169bfe32527ed1824e'
                    }
                    br_equip_cert_validation: {
                        table: 'sys_script'
                        id: '85e77abbf7c747f998ae5435e92ac6a3'
                    }
                    br_equip_status_issue: {
                        table: 'sys_script'
                        id: '51c8dfa3eaa443c6bd1ee1c8e9023688'
                    }
                    br_equip_status_return: {
                        table: 'sys_script'
                        id: 'e1d1d348df3a413aa34f990d9d72bf2c'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'de71dbedcfe94ba3878da80375b47215'
                    }
                    'src_server_acl-scripts_js': {
                        table: 'sys_module'
                        id: 'abdd7a1b88564d8a93d6516905b41893'
                    }
                    'src_server_certification-business-rules_js': {
                        table: 'sys_module'
                        id: '2d10e09494804cb2b1691131fc46e610'
                    }
                    'src_server_equipment-business-rules_js': {
                        table: 'sys_module'
                        id: 'e8087e3662d144d8b9e50c5bb0d25f2d'
                    }
                }
                composite: [
                    {
                        table: 'sys_choice'
                        id: '010877b3b5594acea22a3e1e472d9ea7'
                        key: {
                            name: 'x_snc_national_p_1_ranger'
                            element: 'status'
                            value: 'inactive'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '01283e2f72744fb88d86d0e33e7ab581'
                        key: {
                            name: 'x_snc_national_p_1_ranger'
                            element: 'emergency_contact'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0132421b44e94806914094ec363d6c77'
                        key: {
                            name: 'x_snc_national_p_1_park'
                            element: 'superintendent'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '019faad3141f4d9388c116fc7c83c4d2'
                        key: {
                            name: 'x_snc_national_p_1_equip_category'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '01b8847c08094708ae1a30b31691eec9'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0396465d54b14245aa3c1aa58a772a0f'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'assignment_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '058f83c03b62493c976f2cffc5a6ee90'
                        key: {
                            name: 'x_snc_national_p_1_zone'
                            element: 'zone_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0637eefda84c4255b3ad319e834ae30a'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'assignment_status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0642a8b0984345419205f91fa467d4a0'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'equipment_status'
                            value: 'available'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '06884e3416f64f39a46a83460fbd8dd1'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'maintenance_type'
                            value: 'calibration'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '073481e0f0ff4cb08188e3900dff7a7f'
                        key: {
                            name: 'x_snc_national_p_1_zone'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '07a02a435cf349d593c556db51d5c73c'
                        key: {
                            sys_security_acl: '0a250570dfad4fd3a26055bb4fb7c781'
                            sys_user_role: {
                                id: '40049b88d949484e8f76040e5782403b'
                                key: {
                                    name: 'x_snc_national_p_1.ranger'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '07ad7907471d4c4cba0747518429ec78'
                        key: {
                            name: 'x_snc_national_p_1_zone'
                            element: 'zone_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '08a8d0ede45f42e49dc4de63ccf725c4'
                        key: {
                            name: 'x_snc_national_p_1_ranger'
                            element: 'ranger_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '09d33db8de294de387b209473025b6a8'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'labor_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '0a4fd35e19b64a7caec35441a1479c95'
                        key: {
                            name: 'x_snc_national_p_1_park'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0b500fef2de041598dac8a25828b75c7'
                        key: {
                            sys_security_acl: '10e95ff905fe43debb6b0239442794c1'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d7ef993ef4a47acb13040109c4e9314'
                        key: {
                            name: 'x_snc_national_p_1_swap_request'
                            element: 'swap_reason'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d834b701dc346d39d304efc19326cf7'
                        key: {
                            name: 'x_snc_national_p_1_swap_request'
                            element: 'approval_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0f51865afa15470e83ef2ecb89aa6d9c'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'condition'
                            value: 'decommissioned'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '10272a1bf48141f986b0b9df5e618016'
                        key: {
                            name: 'x_snc_national_p_1_park'
                            element: 'acreage'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '103343fda4374f8ca4cffa5e77837824'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'assignment_type'
                            value: 'maintenance'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1116aac71a25463a8c61fb20b5734066'
                        key: {
                            name: 'x_snc_national_p_1_zone'
                            element: 'hazard_level'
                            value: 'extreme'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '116d192e1c31472987e0ff06c260a4e2'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '11e6d27b4143473f901b1584ff92031d'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'ranger'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '12d1a5feb670438ca6b4d30967132e90'
                        key: {
                            sys_security_acl: 'a21e59ead5484f4b9cd2617ac80d8c61'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '12daee81f0e04eb4950d4d33333704a1'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'last_inspection'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '12f9d42c9c194fe2ba7e86a86d403750'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'expected_return'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '13918b7391924ab391725d57f66ff320'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'assignment_notes'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '145fb247b1ca45428583ecee221930aa'
                        key: {
                            name: 'x_snc_national_p_1_swap_request'
                            element: 'approval_status'
                            value: 'denied'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '149ca045b5174a8fb5b7affc38bbca7f'
                        key: {
                            name: 'x_snc_national_p_1_zone'
                            element: 'zone_type'
                            value: 'wilderness'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1521057193d14313aa977b23e85a2d66'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'purchase_cost'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '1752c20d51554cc6a36974bf853a12ad'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '17d67e5fe2c44097bdcf034aceee804d'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'assignment_type'
                            value: 'training'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '17ed991aaf724f5083d0c09d2c619c20'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'maintenance_status'
                            value: 'scheduled'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '1ad8ec19d307452f8d1b52bb2a0a9fb1'
                        key: {
                            name: 'x_snc_national_p_1_certification'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1bc9c9f62bb44a6480411191c6b9ec92'
                        key: {
                            name: 'x_snc_national_p_1_ranger'
                            element: 'specializations'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '1c3e91945c5345178c80ff7c8fa6e3bb'
                        key: {
                            sys_security_acl: 'a21e59ead5484f4b9cd2617ac80d8c61'
                            sys_user_role: {
                                id: '81565283087d49629664d2fdbcba1a24'
                                key: {
                                    name: 'x_snc_national_p_1.equipment_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1e4994e45a9a447292d5aa9509016385'
                        key: {
                            name: 'x_snc_national_p_1_ranger'
                            element: 'emergency_contact'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '1ed564650f374c0fbb5480c5badf089d'
                        key: {
                            name: 'x_snc_national_p_1_cert_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1eea5cd6d6e24f8ebf6addd1cfa7ee6f'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'assignment_status'
                            value: 'overdue'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1f26be19daf849938d37022f19818c1a'
                        key: {
                            name: 'x_snc_national_p_1_park'
                            element: 'region'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '1ff00d71f51f42d4b33d2ab1e882fd4a'
                        key: {
                            name: 'x_snc_national_p_1_ranger'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '201820f6873b4f1e952ed0396066b87a'
                        key: {
                            name: 'x_snc_national_p_1_zone'
                            element: 'hazard_level'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2289693fb23b4ac587e2de3cdd05cf93'
                        key: {
                            name: 'x_snc_national_p_1_cert_type'
                            element: 'validity_months'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '22e5b7e896fb46c5a81f32223b54867d'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'issued_by'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '23649460f743486a9ac07b3dc1f36203'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '23f202bd0e7a4d3a98ff1c7fbd3c741f'
                        key: {
                            sys_security_acl: 'dd21df3dd8c4439695100272a7d97ffb'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '244a66934ca647fc83b5e0dd7f36a8d8'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'zone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '24f5538a1ee1441d995e29a1226b52b2'
                        key: {
                            sys_security_acl: 'fe3ca551549e4ac890a1812f756f6a82'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '261d3f7f419b4251bb7cfa77a8f8fe2b'
                        key: {
                            name: 'x_snc_national_p_1_certification'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '275f0510a2174e73880f1d8777435d9a'
                        key: {
                            name: 'x_snc_national_p_1_zone'
                            element: 'hazard_level'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '27fa5c22e50a4ae69a9f59698e8fff78'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'return_condition'
                            value: 'damaged'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '29062f2c55a847fc80aa03df314b2476'
                        key: {
                            name: 'x_snc_national_p_1_park'
                            element: 'region'
                            value: 'intermountain'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2a73675b35584d2f98007eef461084b4'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'maintenance_status'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '2ad74072eab34f63bc0f7f36b25a2e13'
                        key: {
                            name: 'x_snc_national_p_1.supervisor'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2bb26fae9f694a819ae8229e42640d96'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'maintenance_type'
                            value: 'replacement'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2c67c688a731474eb61370ebfc1b5115'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'supervisor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2ce441761649421f85fc4f7f3944e8a5'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'equipment_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2cf7bdf3b741452194661a30a194e745'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'equipment'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '2f692f60ead24cac8130ff942f32e057'
                        key: {
                            name: 'x_snc_national_p_1_swap_request'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2febdfa777d045558199c5512586cd34'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'assignment_type'
                            value: 'emergency_response'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3054c27044ed4b5a9d549ac4975ed31e'
                        key: {
                            name: 'x_snc_national_p_1_ranger'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3151f30f4b5a4352b7a89098c4774ac9'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '315dede438c144f59b0c03970998a554'
                        key: {
                            name: 'x_snc_national_p_1_ranger'
                            element: 'badge_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '31c5bb2dea5e42d9a53b0c257222ed25'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'last_inspection'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '31d8b6afa99e4a8597222e1da3c282c3'
                        key: {
                            role: {
                                id: '2ad74072eab34f63bc0f7f36b25a2e13'
                                key: {
                                    name: 'x_snc_national_p_1.supervisor'
                                }
                            }
                            contains: {
                                id: '40049b88d949484e8f76040e5782403b'
                                key: {
                                    name: 'x_snc_national_p_1.ranger'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '325d152550d2450fb9ecba9add8d5d81'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'equipment_status'
                            value: 'issued'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '338dfb02b38444ffb638b1b4ec2c8aaa'
                        key: {
                            name: 'x_snc_national_p_1_zone'
                            element: 'ranger_capacity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3506b4de3a4a44cebd9aa0a12476a908'
                        key: {
                            name: 'x_snc_national_p_1_park'
                            element: 'superintendent'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '36013108aa144e0996f9910e99648b55'
                        key: {
                            name: 'x_snc_national_p_1_ranger'
                            element: 'user'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '36528315335c4260819ffa6c6d2b6275'
                        key: {
                            name: 'x_snc_national_p_1_certification'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '36bf1cd6979846b4baa27f0fd53b936e'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3761f43ba04045e9bccecbd07d69109f'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'labor_cost'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '378f8a56033c4861bfeab3a141e8a7c1'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'issued_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3817ec5b92fd485fa2dcdcb7b4a6a806'
                        key: {
                            name: 'x_snc_national_p_1_park'
                            element: 'region'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '39ed3b9adf6d4218bf9d86312ef26b56'
                        key: {
                            sys_security_acl: '3ac54ee504c043a69fbc68c6baaa4cda'
                            sys_user_role: {
                                id: '40049b88d949484e8f76040e5782403b'
                                key: {
                                    name: 'x_snc_national_p_1.ranger'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3b37debcfe3f4887b61bb3e69033cdd0'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3b6bc63dfcc841df963ef3f9423f6575'
                        key: {
                            sys_security_acl: '6230c0891db94e8d8bf26db7b89f85bd'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3bb95215aff24357b48580401dc9bcf8'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'equipment'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3c9d1e41c4ee49138c1a6d6975134af0'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'expected_return'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3e03b479d63a4e25ad47e5f8aa302ace'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'maintenance_status'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3fad2eebdba448d4abcdfd0e08f28e71'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'actual_return'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '3ff95693b5a14303a1dc2960e5b87499'
                        key: {
                            role: {
                                id: '81565283087d49629664d2fdbcba1a24'
                                key: {
                                    name: 'x_snc_national_p_1.equipment_manager'
                                }
                            }
                            contains: {
                                id: '40049b88d949484e8f76040e5782403b'
                                key: {
                                    name: 'x_snc_national_p_1.ranger'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '40049b88d949484e8f76040e5782403b'
                        key: {
                            name: 'x_snc_national_p_1.ranger'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '402b534913c24b0fae60f78779938937'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'assignment_status'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '4041efc3154c40b480d1bf39f3825845'
                        key: {
                            category: 'x_snc_national_p_1_equipment'
                            prefix: 'NPS-EQ-'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '40942dc8ffe942438b19434875afa278'
                        key: {
                            name: 'x_snc_national_p_1_ranger'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '40a5fc7ec3b9477587a6a0492b825fd9'
                        key: {
                            name: 'x_snc_national_p_1_swap_request'
                            element: 'accepting_ranger'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '40b8a666fcab4361a17d607e6e4e9fd9'
                        key: {
                            name: 'x_snc_national_p_1_park'
                            element: 'region'
                            value: 'pacific_west'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '40d0406e8aea449c856a277fe0b8727f'
                        key: {
                            name: 'x_snc_national_p_1_swap_request'
                            element: 'swap_reason'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '41777446334f4300812a3145fe866108'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'equipment'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '41edf2c355364cca9bfa349611e6babf'
                        key: {
                            sys_security_acl: '45f8c7a537094c4cbb72748fb2945e9d'
                            sys_user_role: {
                                id: '40049b88d949484e8f76040e5782403b'
                                key: {
                                    name: 'x_snc_national_p_1.ranger'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '42fc12232f1a499b864af88c64075237'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'next_inspection_due'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '44332fb89c1649ea9fc39ca3a3a47a82'
                        key: {
                            sys_security_acl: '2b2db67833fd4e9ebc47693a41eea016'
                            sys_user_role: {
                                id: '2ad74072eab34f63bc0f7f36b25a2e13'
                                key: {
                                    name: 'x_snc_national_p_1.supervisor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '445c580837044d40b16ee8074276d47e'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '44c0e943aaf942eeafa71855606771a8'
                        key: {
                            sys_security_acl: 'b3e86533bb894e1fa17c3bb89e0a64a2'
                            sys_user_role: {
                                id: '40049b88d949484e8f76040e5782403b'
                                key: {
                                    name: 'x_snc_national_p_1.ranger'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '44d5baac13fa484ea1c2d076fe927887'
                        key: {
                            role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                            contains: {
                                id: '2ad74072eab34f63bc0f7f36b25a2e13'
                                key: {
                                    name: 'x_snc_national_p_1.supervisor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '455d4e4f78fd484591396e781cfa16cb'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'shift_start'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '470ed22daee544938e0860fcdca9e65a'
                        key: {
                            sys_security_acl: 'dd21df3dd8c4439695100272a7d97ffb'
                            sys_user_role: {
                                id: '81565283087d49629664d2fdbcba1a24'
                                key: {
                                    name: 'x_snc_national_p_1.equipment_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '47640d3f7cec4bf09071ed2d836700d9'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'park'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '478428ebd0294c798e9e8ac433d5eb00'
                        key: {
                            role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                            contains: {
                                id: '40049b88d949484e8f76040e5782403b'
                                key: {
                                    name: 'x_snc_national_p_1.ranger'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '47f597d061154c4cb2481b591e480196'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4825016be48e4e5f879ec7435966a3ed'
                        key: {
                            sys_security_acl: '10e95ff905fe43debb6b0239442794c1'
                            sys_user_role: {
                                id: '2ad74072eab34f63bc0f7f36b25a2e13'
                                key: {
                                    name: 'x_snc_national_p_1.supervisor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4b52720d9839403aaaaa44a3ae6cd04f'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'maintenance_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4b693effae9345178570552c19f583e0'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'parts_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4c8ddbce66c549d2b93d873d46061ef4'
                        key: {
                            name: 'x_snc_national_p_1_cert_type'
                            element: 'issuing_authority'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4d1aef8406e94fd6b9522ce1bfc9b7d8'
                        key: {
                            name: 'x_snc_national_p_1_zone'
                            element: 'hazard_level'
                            value: 'moderate'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4d98beb016364233b0f2768a61e90f01'
                        key: {
                            sys_security_acl: '034d8116f11e41048ff43b431984b190'
                            sys_user_role: {
                                id: '2ad74072eab34f63bc0f7f36b25a2e13'
                                key: {
                                    name: 'x_snc_national_p_1.supervisor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4e3e1cf81ebc449d8e6e411c6a3e64ce'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'assignment_status'
                            value: 'completed'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4f5f745f72824b31b45dc8ce6c32b47b'
                        key: {
                            sys_security_acl: '6230c0891db94e8d8bf26db7b89f85bd'
                            sys_user_role: {
                                id: '2ad74072eab34f63bc0f7f36b25a2e13'
                                key: {
                                    name: 'x_snc_national_p_1.supervisor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '50004e4ab85e4857baf699b2521153f9'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'maintenance_type'
                            value: 'cleaning'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '508b92056c504ebe87f3942d517fa4f8'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'equipment_status'
                            value: 'lost'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '509d64e4591947d3bcaa3e463c5a7245'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'inspection_interval_days'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '50f4077e1e5047d2a50695309b482a46'
                        key: {
                            sys_security_acl: '37abbaf94d094b5cb14542f4ba60888b'
                            sys_user_role: {
                                id: '40049b88d949484e8f76040e5782403b'
                                key: {
                                    name: 'x_snc_national_p_1.ranger'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '516befaebdfe4133ba26e95563cb0765'
                        key: {
                            name: 'x_snc_national_p_1_certification'
                            element: 'status'
                            value: 'expired'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '518776299cd74434b2350b024fc0b9af'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'return_condition'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '519b7693074548379041fec447148a0a'
                        key: {
                            name: 'x_snc_national_p_1_certification'
                            element: 'issue_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '521d5f2d0d1f4db5a7001f2fcd8cafcc'
                        key: {
                            name: 'x_snc_national_p_1_certification'
                            element: 'status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '52a8a497369e4a46bc267c4ddafc49c5'
                        key: {
                            name: 'x_snc_national_p_1_park'
                            element: 'region'
                            value: 'alaska'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '53119ad2010e49b3850820f37c6516ed'
                        key: {
                            role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                            contains: {
                                id: '81565283087d49629664d2fdbcba1a24'
                                key: {
                                    name: 'x_snc_national_p_1.equipment_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '531cc9a073ae48e68a44a6d981213a48'
                        key: {
                            name: 'x_snc_national_p_1_swap_request'
                            element: 'approved_by'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '54425d5e69b748cb8207deaa4e12b1f6'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'completed_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '54bbb32f8afb4b08b71a7b4e88484ca2'
                        key: {
                            name: 'x_snc_national_p_1_park'
                            element: 'visitor_center_phone'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '54ce3c4fc469435f8a179522fc0b3b1c'
                        key: {
                            sys_security_acl: '48fc5f74d0e84d45aab2742df1e59eb4'
                            sys_user_role: {
                                id: '40049b88d949484e8f76040e5782403b'
                                key: {
                                    name: 'x_snc_national_p_1.ranger'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5808fd7f5c074815ad7d625dd76df737'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'assignment_status'
                            value: 'cancelled'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5843454c5d1f4566a60a3a7d73c4a108'
                        key: {
                            sys_security_acl: 'dadf398d12b74d28aefc459caaffdde1'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5873f7a587064b48b6208c7da217e6f8'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'equipment_status'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '5a2169b8828042e1b7ad02b4e7d2c18a'
                        key: {
                            sys_security_acl: '6e41420e8e1f4bed9a0224f1e5627689'
                            sys_user_role: {
                                id: '81565283087d49629664d2fdbcba1a24'
                                key: {
                                    name: 'x_snc_national_p_1.equipment_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5b3da70e6cf94f29ac8f083e8c374f73'
                        key: {
                            name: 'x_snc_national_p_1_certification'
                            element: 'issue_date'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '5bbf925ca689450bab7c19457d930390'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'assignment_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5c935385ded74131a581985cb6292b3b'
                        key: {
                            name: 'x_snc_national_p_1_zone'
                            element: 'zone_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5d0acadaba3147aea998dc2202ad5596'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5d139e5369a04de79396e6bf98f35d03'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'return_notes'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '60639e99646643edae781e7689483525'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'asset_tag'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '63f7b426d15e4f0eb3060a4dd57eda02'
                        key: {
                            name: 'x_snc_national_p_1_swap_request'
                            element: 'requesting_ranger'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '64774a4e3555447685736508bbe0f4d7'
                        key: {
                            sys_security_acl: 'c8e7a60bf908461cb0edee2b234e34ae'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '666ba8622ed147ce8d061b69929314d3'
                        key: {
                            name: 'x_snc_national_p_1_cert_type'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '66f813484a7e481ab93fa09605a94a0e'
                        key: {
                            sys_security_acl: '0ba6465bcc604fedb4066ff0a973d275'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '680b80d996b242579cdc4a20b6b33746'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'return_condition'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '68f12fced91b4229b7ea693346801eb7'
                        key: {
                            name: 'x_snc_national_p_1_cert_type'
                            element: 'code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '694fc64da1a049dfb8511380199e5971'
                        key: {
                            name: 'x_snc_national_p_1_certification'
                            element: 'certificate_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '69606b889e134f32a21ef8efaff3c59b'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'condition'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '696968a14ffd467aa306cabc04ef6237'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'assignment_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '699f639d81ee4570a9073c272d0616f7'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'maintenance_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '69c597fc23ca4d3b9700f8e64a379443'
                        key: {
                            name: 'x_snc_national_p_1_cert_type'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '69f44f63aea043748436222044c61b98'
                        key: {
                            name: 'x_snc_national_p_1_park'
                            element: 'acreage'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6afefdd06e9f4245b6115b709beda61f'
                        key: {
                            sys_security_acl: '0a59d39dbc2f4e94b7fb721878b66a6e'
                            sys_user_role: {
                                id: '81565283087d49629664d2fdbcba1a24'
                                key: {
                                    name: 'x_snc_national_p_1.equipment_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6b11e2d7535d4710834e0caca34f5483'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'return_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6b824efa2e3e4b9985b4a131f18c09d7'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'equipment_status'
                            value: 'in_maintenance'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '6bae3617e6fa41f5a5c105fd44a02d58'
                        key: {
                            name: 'x_snc_national_p_1_certification'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '6c4defe8e84842488483a0af1651e04a'
                        key: {
                            sys_security_acl: 'a0b3a4ff0ae94304b30d1273715c2982'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6d634096563543dcb9ea41dcc0bd5b91'
                        key: {
                            name: 'x_snc_national_p_1_swap_request'
                            element: 'approval_status'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6da4952dd4cc49cd808d511dcdb4785f'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'findings'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6ecc2c02cfe8464082a6f8fde1be3a9c'
                        key: {
                            name: 'x_snc_national_p_1_park'
                            element: 'park_code'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6ee9cf30f4424327901d9d1eacd99949'
                        key: {
                            name: 'x_snc_national_p_1_ranger'
                            element: 'user'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6ff6c419a0314cf8b2360df868c5d76e'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'maintenance_type'
                            value: 'repair'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '711fe8938377411cae2b3748f391dfbc'
                        key: {
                            name: 'x_snc_national_p_1_zone'
                            element: 'zone_code'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '71308722e7614aed9de4f37ede8b0c79'
                        key: {
                            sys_security_acl: '4205aecce4e54c649fed5db725aeed15'
                            sys_user_role: {
                                id: '2ad74072eab34f63bc0f7f36b25a2e13'
                                key: {
                                    name: 'x_snc_national_p_1.supervisor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '71c8adea5d5843faafb5f899899c5fd4'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'completed_date'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '728e7a1d1cd241429b056a44f57559f2'
                        key: {
                            sys_security_acl: 'b1b36d3b4b01466ab37dac93d84a241a'
                            sys_user_role: {
                                id: '81565283087d49629664d2fdbcba1a24'
                                key: {
                                    name: 'x_snc_national_p_1.equipment_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7297856a66674085a8bcca343caa46bb'
                        key: {
                            sys_security_acl: '21e8042ede7a4e8ebe582cd35c4d6184'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '72fd3b4ecea44569baf2cf930dc945dc'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '733299b760b543818a68fb0b7b151c78'
                        key: {
                            name: 'x_snc_national_p_1_zone'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7350ee9474654129b49bff491f6f8354'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'return_condition'
                            value: 'good'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7396b98235c34e5fa52a643ab2e8c3e2'
                        key: {
                            name: 'x_snc_national_p_1_ranger'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '73e1a6f766ab4f9cb3a42903281e4961'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'maintenance_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7411085cfe4344c49f7e0a446864053f'
                        key: {
                            name: 'x_snc_national_p_1_park'
                            element: 'region'
                            value: 'midwest'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '74835ec903c94fb282f85d69d6c9a9e1'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '74dca567d18049ce8dc08046d115cf23'
                        key: {
                            category: 'x_snc_national_p_1_ranger'
                            prefix: 'RGR'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7500c84b3b1f4f3ebd4582c46ce4a5fd'
                        key: {
                            name: 'x_snc_national_p_1_certification'
                            element: 'ranger'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '755d31f13da94362bbaeb7032a594dba'
                        key: {
                            sys_security_acl: '034d8116f11e41048ff43b431984b190'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7626372272804bb7ad321a9a7e0ef3f6'
                        key: {
                            name: 'x_snc_national_p_1_equip_category'
                            element: 'code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '762de5b267974b359f5546b39f4a2afb'
                        key: {
                            name: 'x_snc_national_p_1_equip_category'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '764068cd49ef49cf97e163dda9bddb29'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'warranty_expiration'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '77aba781846c44c68676c1ad0fc2e73c'
                        key: {
                            name: 'x_snc_national_p_1_certification'
                            element: 'status'
                            value: 'pending_renewal'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '77c6ec6d1b98430cb2e2aba3baa11424'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'shift_start'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7803fa53052e4ef69729e8bbf010147f'
                        key: {
                            name: 'x_snc_national_p_1_equip_category'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7821315023064d24beafe104186d0099'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'inspection_interval_days'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7868d7e610c044c0a8be6c42d2b03a57'
                        key: {
                            name: 'x_snc_national_p_1_park'
                            element: 'region'
                            value: 'southeast'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '78bc0fdf24584ac29207ec9d6f7a21a3'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'park'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '7960406a8772471b96b7c7db57ac8847'
                        key: {
                            name: 'x_snc_national_p_1_park'
                            element: 'region'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7b7d1a2a1b274321b508932fa3502140'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'actions_taken'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7ce23fe3bab44bb69de68d7c2d04929d'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'next_inspection_due'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7e2f43e8f45149a38e24f716d2274720'
                        key: {
                            name: 'x_snc_national_p_1_cert_type'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '7e7a296a595b44b790988f7289a0f593'
                        key: {
                            sys_security_acl: '0a59d39dbc2f4e94b7fb721878b66a6e'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7ef28217517b47d885008395b0911316'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '814803a72d844b34baac79255b0f7ee2'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'assignment_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '81565283087d49629664d2fdbcba1a24'
                        key: {
                            name: 'x_snc_national_p_1.equipment_manager'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '8194e1a3c0554e9f8e921a7cf26b8f29'
                        key: {
                            name: 'x_snc_national_p_1_park'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '81d82ebc235443d8841a110aec1935e1'
                        key: {
                            name: 'x_snc_national_p_1_swap_request'
                            element: 'approval_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8246b99ed0d340739ec9e20d3cb8a476'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'condition'
                            value: 'poor'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '829f6d005c2f4437885d8803b4fa9ef7'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'make'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '82fb54528a3a4889ba729ef4caaffba3'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'assignment_status'
                            value: 'lost'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '85a53216f58a40968ad1bf202638059f'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'issue_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8619d42f5a624e02bfa94b46fd14d511'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'shift_end'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '884ca6e00c5f48198b81db1b8f273857'
                        key: {
                            name: 'x_snc_national_p_1_zone'
                            element: 'hazard_level'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '894ccf4dc2464b0fb88baa43beb53edd'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'return_condition'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '898015c7cf164d08b1919c3ad330cd2e'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'purchase_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '89dae0168dfb4506b0c6e329d17c19ea'
                        key: {
                            sys_security_acl: 'c8a73e43516a4725b3dc55534e71e7f6'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8a2ac8e78fff4df78e9189f8251ff90e'
                        key: {
                            sys_security_acl: '6e41420e8e1f4bed9a0224f1e5627689'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8a4a1bb56c6d4e7aa0f33e8d167cf63a'
                        key: {
                            name: 'x_snc_national_p_1_swap_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8abb5bbc025747b2a02b771017584d19'
                        key: {
                            name: 'x_snc_national_p_1_zone'
                            element: 'zone_type'
                            value: 'visitor_services'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '8c839c82c9d34eef863d962a531e863f'
                        key: {
                            name: 'x_snc_national_p_1_certification'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8da0cac24510415a914721d8c667b0d9'
                        key: {
                            name: 'x_snc_national_p_1_zone'
                            element: 'zone_type'
                            value: 'backcountry'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8e878daa92f54863a1aaa90169392c2b'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'ranger'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8fd1cd47f085484c9bd39069a1de7ec0'
                        key: {
                            name: 'x_snc_national_p_1_certification'
                            element: 'expiration_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '903e2f25f57d4c92965a98c5d1d72fcb'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'assignment_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '910b15323d214aefa1af15309ba549af'
                        key: {
                            name: 'x_snc_national_p_1_park'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '916c5caf1b5d459b86884593da0c2c84'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'condition'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '929f10ecab3c4736b3a274fa5cd766d8'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'actual_return'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '94230fa6c99d484caf57911fd8cbc6e5'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'next_maintenance_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '943f5f577b3d4eb7a18be84d18e8671d'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'maintenance_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9502787ae4254d8b9db6de63b2691693'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '96f15e8889384cb0aabf5e84836bc98c'
                        key: {
                            sys_security_acl: '09f32e50016f46d3804f70e0dec8c196'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '988609a3dd234e08b718d57061bce490'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'serial_number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9958b48838b64e60b10d37fbe2bb2d29'
                        key: {
                            name: 'x_snc_national_p_1_equip_category'
                            element: 'code'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '99dc867b4ebe4cc09a4969760beeb796'
                        key: {
                            name: 'x_snc_national_p_1_zone'
                            element: 'required_certifications'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9a72ea5ff63c4bdf802a203e08b557fa'
                        key: {
                            sys_security_acl: 'd3e565c6e9a547628d8324cf342619ed'
                            sys_user_role: {
                                id: '81565283087d49629664d2fdbcba1a24'
                                key: {
                                    name: 'x_snc_national_p_1.equipment_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9a7367171eba4b90a5701876d834c4e4'
                        key: {
                            sys_security_acl: '17632b2f5fd94a80a1904340ed81246f'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9accbe6515a34229aecda0fad4ab42e4'
                        key: {
                            sys_security_acl: 'b3e86533bb894e1fa17c3bb89e0a64a2'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9af5dbf6bd704b58a2da0067877e9c46'
                        key: {
                            name: 'x_snc_national_p_1_ranger'
                            element: 'hire_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9d31098ecf8a4af08b1ab162e4331cd8'
                        key: {
                            name: 'x_snc_national_p_1_zone'
                            element: 'zone_type'
                            value: 'developed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9f56d695e5be49fabf310cbeb2d48b2c'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'actions_taken'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'a07e0c1e700d44cf99b094c4475e503b'
                        key: {
                            name: 'x_snc_national_p_1_equip_category'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a149dbd1ebee468f8e37d849a55cf5ed'
                        key: {
                            name: 'x_snc_national_p_1_swap_request'
                            element: 'approval_status'
                            value: 'approved'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a1e962aa8ef948ddad5f0565c2ecce2a'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'condition'
                            value: 'fair'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a3b4132c76ae4e939206730f59313461'
                        key: {
                            name: 'x_snc_national_p_1_ranger'
                            element: 'ranger_id'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a3f344de852a4a92abad743016f57e41'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'serial_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a42284f3a91148729480bca6718bb9ae'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'scheduled_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a46621b5e45a4d62ba4d80eaf0c72b33'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'assignment_type'
                            value: 'visitor_services'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a610d452ee77476094f2a80aee61f118'
                        key: {
                            name: 'x_snc_national_p_1_certification'
                            element: 'certification_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a6ce8a03c7254ed7aea1f5cddcf4f091'
                        key: {
                            name: 'x_snc_national_p_1_certification'
                            element: 'certificate_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a762135c7b6447df9fdddcf9cc1f0f2d'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'return_condition'
                            value: 'lost'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a7c317680b464676a253cc575106166e'
                        key: {
                            name: 'x_snc_national_p_1_equip_category'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'aab494e65b154b828531199649daf4a9'
                        key: {
                            sys_security_acl: '0a59d39dbc2f4e94b7fb721878b66a6e'
                            sys_user_role: {
                                id: '40049b88d949484e8f76040e5782403b'
                                key: {
                                    name: 'x_snc_national_p_1.ranger'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'abfaa96990364b97b55f87aa45fc2010'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'issue_notes'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ad2444a2bc614f76a4161d3d5f168406'
                        key: {
                            sys_security_acl: '4205aecce4e54c649fed5db725aeed15'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ae52711946dc4a678e76372de9127a0b'
                        key: {
                            name: 'x_snc_national_p_1_certification'
                            element: 'expiration_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aec5a8b0250a4200afe22bd1f0e77a9b'
                        key: {
                            name: 'x_snc_national_p_1_certification'
                            element: 'ranger'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'aecb85a465a440709671de1e379b8452'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'maintenance_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'af2287374f65427cb1b8b251e49c4da0'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'assignment_status'
                            value: 'returned'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'af9e44274dcb40bfbbaec3c77d7a3bad'
                        key: {
                            name: 'x_snc_national_p_1_zone'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'afbde2b6ca3144eda26bea841ecae7a9'
                        key: {
                            sys_security_acl: '9e4000ffec044cf5abe650692eb6d9d8'
                            sys_user_role: {
                                id: '2ad74072eab34f63bc0f7f36b25a2e13'
                                key: {
                                    name: 'x_snc_national_p_1.supervisor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b01aef973c19475ea50e5e16cbca8ca9'
                        key: {
                            name: 'x_snc_national_p_1_ranger'
                            element: 'status'
                            value: 'on_leave'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b07dd76a0e7f4d17b8d2dd7c4f06704c'
                        key: {
                            name: 'x_snc_national_p_1_zone'
                            element: 'ranger_capacity'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b0c7c6cc75194090a6ac7a944355bf08'
                        key: {
                            sys_security_acl: 'd3e565c6e9a547628d8324cf342619ed'
                            sys_user_role: {
                                id: '2ad74072eab34f63bc0f7f36b25a2e13'
                                key: {
                                    name: 'x_snc_national_p_1.supervisor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b1f28375906b49328ee49d682ce68804'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'assignment_type'
                            value: 'patrol'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b27681df29924e959f9220472bec36ee'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'equipment'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b27cdf3b08114dfe9a6f0c2ba0ee4f36'
                        key: {
                            sys_security_acl: 'd3e565c6e9a547628d8324cf342619ed'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b3fc6578bb934c70a4f128a7b0d99e26'
                        key: {
                            name: 'x_snc_national_p_1_certification'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b4d827c17ceb48bca8e38dc37935afac'
                        key: {
                            sys_security_acl: '846453b008f84d2ca7b12d61e5c5d120'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b583d97b782d4cf0bedd7abc912cef02'
                        key: {
                            name: 'x_snc_national_p_1_cert_type'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'b841610e118f42048226d8a5169cc68c'
                        key: {
                            name: 'x_snc_national_p_1_swap_request'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'b8cb09c51db0463499209dda809e3b29'
                        key: {
                            sys_security_acl: '61fa50cb92cf4e49b30e91d4bb29666f'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'ba9baa967aff45fd992394ab102f6322'
                        key: {
                            name: 'x_snc_national_p_1_zone'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bb140332f2b948cdaf254735a74156c5'
                        key: {
                            name: 'x_snc_national_p_1_ranger'
                            element: 'hire_date'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'bcac957efe2e4278b46923b254c037c4'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'equipment_status'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'bd23f6c7ca5b4c28a35aba1854ea5158'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bd2bfc9b69b24f0081fce23a7e8cd90d'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'assignment_status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bf0c87d61e1146c39e202bd54dd490be'
                        key: {
                            name: 'x_snc_national_p_1_zone'
                            element: 'park'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'c14ad371ac4d42ca84588bd2a1c6e3ad'
                        key: {
                            name: 'x_snc_national_p_1_zone'
                            element: 'hazard_level'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c2413f0d434d4d3090e67be381d2940e'
                        key: {
                            name: 'x_snc_national_p_1_cert_type'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c243afbd7d994859a0c94ec01206c8b5'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'findings'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c283613a80a24d75a876e206dab18e22'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c3a24e4f004e42cbb8ce57dd71827b80'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'scheduled_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c50404e1e0214db58518907a0be9ed2d'
                        key: {
                            name: 'x_snc_national_p_1_certification'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c56f280268e941289dd6b15fc10cc0b4'
                        key: {
                            name: 'x_snc_national_p_1_cert_type'
                            element: 'issuing_authority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c70e7f0996a645b3a037fa0c1dcd5960'
                        key: {
                            sys_security_acl: '846453b008f84d2ca7b12d61e5c5d120'
                            sys_user_role: {
                                id: '2ad74072eab34f63bc0f7f36b25a2e13'
                                key: {
                                    name: 'x_snc_national_p_1.supervisor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c71e6a5a54b748b089950425442ee8fe'
                        key: {
                            sys_security_acl: 'b3e86533bb894e1fa17c3bb89e0a64a2'
                            sys_user_role: {
                                id: '2ad74072eab34f63bc0f7f36b25a2e13'
                                key: {
                                    name: 'x_snc_national_p_1.supervisor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c792f19c7fea4d8ca03f7bd28cca2288'
                        key: {
                            name: 'x_snc_national_p_1_zone'
                            element: 'required_certifications'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c85112d7973a4ce9bf6528822e329a8c'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'maintenance_status'
                            value: 'completed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c8d41e3e24fa411793a170c613c7889a'
                        key: {
                            name: 'x_snc_national_p_1_swap_request'
                            element: 'original_assignment'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ccec2629349640dbb46f69e91745a373'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'maintenance_type'
                            value: 'routine_inspection'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cd21e234fcaa4063a95b57823a139215'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'purchase_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ce0d292af42142108ade49f0b8d1282b'
                        key: {
                            sys_security_acl: 'a765f1f810b44b88880cfdecdaaf2515'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cfadf2596ee3441499e60170c96044c8'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'equipment_status'
                            value: 'retired'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cfcd936e4b00411696938455fd9c3bcc'
                        key: {
                            name: 'x_snc_national_p_1_equip_category'
                            element: 'requires_certification'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd0646f7e00c34d23a7b3b2dc35d8c5b0'
                        key: {
                            name: 'x_snc_national_p_1_park'
                            element: 'park_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd0a41b24d98b4400a77d5cf7b38ed3c6'
                        key: {
                            name: 'x_snc_national_p_1_swap_request'
                            element: 'original_assignment'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd1425bf739104304b7ad2f3424831737'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd19e111e99fd4edcb4cca09bc1fcf2b6'
                        key: {
                            sys_security_acl: 'c2f8f535999646728c3846542d7b2bb7'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd231d300faf74311854a63161c3e5ded'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'ranger'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd2cb600ed9214da7ac1b6f8ecc699d05'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'purchase_date'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                        key: {
                            name: 'x_snc_national_p_1.admin'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd43e4a3f25fb40229a88e8744a86ac91'
                        key: {
                            name: 'x_snc_national_p_1_ranger'
                            element: 'specializations'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd44b42bb59074c75a344048df8f01cfc'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'next_maintenance_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd4889efd232345069b5b40aa2e81b94a'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'condition'
                            value: 'good'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd538b590b4c14c8a985d241f708a8709'
                        key: {
                            sys_security_acl: 'd80767818ab44c6285cbe6701f93be0e'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd58ae259457e4082b22ded1b078f283f'
                        key: {
                            name: 'x_snc_national_p_1_certification'
                            element: 'certification_type'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd62002e343f34162a6434395583697b7'
                        key: {
                            name: 'x_snc_national_p_1_ranger'
                            element: 'primary_park'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'd69f702b02694398b9358dfbf231ef79'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd6e94d1f9d6744c0bfe697dad3f2f710'
                        key: {
                            name: 'x_snc_national_p_1_equip_category'
                            element: 'requires_certification'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd6f161c6bbe74d439581d15da25ec2b5'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'model_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd72b80a104f7434b92844c05e8201a53'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'da34be6d7f224d8f86115acc0445fea7'
                        key: {
                            name: 'x_snc_national_p_1_swap_request'
                            element: 'approved_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'daea13b052e14a04a9a47218ca44ad23'
                        key: {
                            sys_security_acl: 'b1b36d3b4b01466ab37dac93d84a241a'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'db7d751942674d8a9a0fdea1efcf07c3'
                        key: {
                            name: 'x_snc_national_p_1_equip_category'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dbbd88fce6fb42769f7f0e14ac843665'
                        key: {
                            name: 'x_snc_national_p_1_swap_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dbe864a8ff8948039a910f4f02b021cd'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'zone'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dc120fcd3a734eef889d875ff7986860'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'warranty_expiration'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'dcc0592c06e54e5f8af29f1baf57fa60'
                        key: {
                            sys_security_acl: '0a59d39dbc2f4e94b7fb721878b66a6e'
                            sys_user_role: {
                                id: '2ad74072eab34f63bc0f7f36b25a2e13'
                                key: {
                                    name: 'x_snc_national_p_1.supervisor'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'de6c2b198ace4aa09f800abf416521f9'
                        key: {
                            name: 'x_snc_national_p_1_ranger'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dea38328413f4c22a17359d2e7b4ba49'
                        key: {
                            name: 'x_snc_national_p_1_equip_category'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dff2cc82fd2d4ccbaffd50db0ef52ad1'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'performed_by'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e012fc08cd3c45de93f3afe95e653c9e'
                        key: {
                            sys_security_acl: 'b3e86533bb894e1fa17c3bb89e0a64a2'
                            sys_user_role: {
                                id: '81565283087d49629664d2fdbcba1a24'
                                key: {
                                    name: 'x_snc_national_p_1.equipment_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e06e0b5b2b364c4dbfca7b644da508f5'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'maintenance_status'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e0c675099a2e47cdb88a380b23fdb00d'
                        key: {
                            sys_security_acl: 'dd21df3dd8c4439695100272a7d97ffb'
                            sys_user_role: {
                                id: '40049b88d949484e8f76040e5782403b'
                                key: {
                                    name: 'x_snc_national_p_1.ranger'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e22746a4d088468abc9448650c6c159a'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'assignment_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e2c34a352fd141da82945ee82194db54'
                        key: {
                            sys_security_acl: '9e4000ffec044cf5abe650692eb6d9d8'
                            sys_user_role: {
                                id: '81565283087d49629664d2fdbcba1a24'
                                key: {
                                    name: 'x_snc_national_p_1.equipment_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e31673580cf54587a9f1ed30023fabea'
                        key: {
                            name: 'x_snc_national_p_1_zone'
                            element: 'zone_type'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e343822c28b840b7b11c103880058030'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'assignment_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e5259ef7840b47f58f747766c1ec2dfd'
                        key: {
                            name: 'x_snc_national_p_1_ranger'
                            element: 'badge_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e5332b96f43b48fe9b8b571fe3906240'
                        key: {
                            name: 'x_snc_national_p_1_zone'
                            element: 'hazard_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e545cfcd12004d349ac5df561b1a6f26'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'condition'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e67a3f7368a04d8fa10296c0a5edec73'
                        key: {
                            sys_security_acl: '034d8116f11e41048ff43b431984b190'
                            sys_user_role: {
                                id: '81565283087d49629664d2fdbcba1a24'
                                key: {
                                    name: 'x_snc_national_p_1.equipment_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e7e9fd1a17614a21a680c44a56c0c1d9'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'shift_end'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e932eff6201d47278535363fdba54e00'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'asset_tag'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'e96869c6ce42476b97bb9c95f475cfbe'
                        key: {
                            sys_security_acl: '6230c0891db94e8d8bf26db7b89f85bd'
                            sys_user_role: {
                                id: '81565283087d49629664d2fdbcba1a24'
                                key: {
                                    name: 'x_snc_national_p_1.equipment_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'e9c88d7421ce4b0d8d0adf8c39aa0a0d'
                        key: {
                            name: 'x_snc_national_p_1_ranger'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'eb851f639e3b4d62adb4e25873f973b2'
                        key: {
                            sys_security_acl: '02c054d0ec464670b40c9d22a081e777'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'eb8c8a84e5484e53834d5ed2aecb7f3f'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ec97b95f27cb480b9d4626ab0417d1d8'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'assignment_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ec9c73ad379c44a0a2c25e7031747f98'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'assignment_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ecb40b7c67164803946a07adf688a787'
                        key: {
                            name: 'x_snc_national_p_1_cert_type'
                            element: 'validity_months'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ed5b4057c1bd42db8e752dcb69653054'
                        key: {
                            name: 'x_snc_national_p_1_cert_type'
                            element: 'code'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'efd302c177274a8a9ee6ade2c80135de'
                        key: {
                            sys_security_acl: 'a5f0abfbe2864b46b39524b411f96e8e'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'efe408de0a17411ba2f554fc6d52f715'
                        key: {
                            name: 'x_snc_national_p_1_swap_request'
                            element: 'accepting_ranger'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eff84ba207314dc19bda72212a0b2da0'
                        key: {
                            name: 'x_snc_national_p_1_park'
                            element: 'visitor_center_phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f0706c6f9c8942439307f723e0f43f70'
                        key: {
                            name: 'x_snc_national_p_1_ranger'
                            element: 'status'
                            value: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f0ec0324fcab4ec6ad9f51a37a9b3ce5'
                        key: {
                            name: 'x_snc_national_p_1_ranger'
                            element: 'primary_park'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'f19cfcad988048ffafdee45cb6d49f24'
                        key: {
                            name: 'x_snc_national_p_1_cert_type'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f2a1207525364b1781da61d62bb08d9e'
                        key: {
                            sys_security_acl: 'd3e565c6e9a547628d8324cf342619ed'
                            sys_user_role: {
                                id: '40049b88d949484e8f76040e5782403b'
                                key: {
                                    name: 'x_snc_national_p_1.ranger'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f31d1b8aaa5949508aae1f8e4baa2c98'
                        key: {
                            name: 'x_snc_national_p_1_park'
                            element: 'region'
                            value: 'northeast'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f4299ff746b04bebb3caffee8b085814'
                        key: {
                            name: 'x_snc_national_p_1_cert_type'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f47eec4210684bcd84ea7ac432a968b2'
                        key: {
                            name: 'x_snc_national_p_1_zone'
                            element: 'park'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f4bce2ed5da2494c8ac40003393e0c4a'
                        key: {
                            sys_security_acl: '034d8116f11e41048ff43b431984b190'
                            sys_user_role: {
                                id: '40049b88d949484e8f76040e5782403b'
                                key: {
                                    name: 'x_snc_national_p_1.ranger'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f52f9be491d34c608f2a039ce35651dd'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f5701e21fca3497fba484322dd4eb374'
                        key: {
                            name: 'x_snc_national_p_1_swap_request'
                            element: 'approval_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f61e7884e801402098d8beaba80d7042'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'ranger'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f7d7cbd3bcc74ab386a3b09ff338a95b'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'issue_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f7e67a7ac02d465494aaf3895a244dd3'
                        key: {
                            name: 'x_snc_national_p_1_park'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f81fd2fb7b0843b1bdd85adb000fb733'
                        key: {
                            name: 'x_snc_national_p_1_ranger'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f91c1b7b79224647baab0f420d39c6a9'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'performed_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f9a9d7f3e0a742b3b0ecf15f8eadcd56'
                        key: {
                            sys_security_acl: '5e0bded02bd4491f8c7470a251cdf880'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fa52d93c66b8490d8589d8b93c303669'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'model_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fa64ec8a53a743e4be0a4663bcf7f7c5'
                        key: {
                            sys_security_acl: '4205aecce4e54c649fed5db725aeed15'
                            sys_user_role: {
                                id: '81565283087d49629664d2fdbcba1a24'
                                key: {
                                    name: 'x_snc_national_p_1.equipment_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fab3a3290f364f76990f68201bccda72'
                        key: {
                            sys_security_acl: '2b2db67833fd4e9ebc47693a41eea016'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'faddf7a65a974f388d6a3551219eebc2'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'condition'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'fb56c2cb2f14464185781e24bcd4a77c'
                        key: {
                            name: 'x_snc_national_p_1_equip_category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fc34bdfbc5c04c5e8c96e1a451b323d8'
                        key: {
                            name: 'x_snc_national_p_1_swap_request'
                            element: 'requesting_ranger'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fc77ec0c29d3433cb97163cd575d6e5f'
                        key: {
                            name: 'x_snc_national_p_1_equipment'
                            element: 'make'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fd60f57926494490a95ce1245d68db51'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'assignment_status'
                            value: 'scheduled'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fd9908a3cce54b4e84b6d01d32af1e5f'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fdb9a071707241e9878f2c583c24b6b0'
                        key: {
                            name: 'x_snc_national_p_1_assignment'
                            element: 'supervisor'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fe2cb04812724a278769574613d8c193'
                        key: {
                            sys_security_acl: '9e4000ffec044cf5abe650692eb6d9d8'
                            sys_user_role: {
                                id: 'd372f39c8d3a47fbb9fe03bec276cbd1'
                                key: {
                                    name: 'x_snc_national_p_1.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fecc0087c36142428f9d9f83e62395fd'
                        key: {
                            name: 'x_snc_national_p_1_equip_maintenance'
                            element: 'parts_cost'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'fee1002633ae4ee691472ccd3299916b'
                        key: {
                            sys_security_acl: 'bb15b749c00242228a67e76cbc1235bc'
                            sys_user_role: {
                                id: '40049b88d949484e8f76040e5782403b'
                                key: {
                                    name: 'x_snc_national_p_1.ranger'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ff0578ccb5144989ab726c881d45aa23'
                        key: {
                            sys_security_acl: 'c2f8f535999646728c3846542d7b2bb7'
                            sys_user_role: {
                                id: '81565283087d49629664d2fdbcba1a24'
                                key: {
                                    name: 'x_snc_national_p_1.equipment_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ff6da7800b3f437ea5987d1fd0673bb6'
                        key: {
                            name: 'x_snc_national_p_1_equip_assignment'
                            element: 'issue_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ff83188fe56345a796cbd05861644ece'
                        key: {
                            sys_security_acl: 'dd21df3dd8c4439695100272a7d97ffb'
                            sys_user_role: {
                                id: '2ad74072eab34f63bc0f7f36b25a2e13'
                                key: {
                                    name: 'x_snc_national_p_1.supervisor'
                                }
                            }
                        }
                    },
                ]
            }
        }
    }
}
