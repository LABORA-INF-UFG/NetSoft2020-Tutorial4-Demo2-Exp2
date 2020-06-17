/*
 * Generated by asn1c-0.9.29 (http://lionet.info/asn1c)
 * From ASN.1 module "S1AP-IEs"
 * 	found in "../support/r14.4.0/36413-e40.asn"
 * 	`asn1c -pdu=all -fcompound-names -findirect-choice -fno-include-deps`
 */

#ifndef	_S1AP_TAListforMDT_H_
#define	_S1AP_TAListforMDT_H_


#include <asn_application.h>

/* Including external dependencies */
#include "S1AP_TAC.h"
#include <asn_SEQUENCE_OF.h>
#include <constr_SEQUENCE_OF.h>

#ifdef __cplusplus
extern "C" {
#endif

/* S1AP_TAListforMDT */
typedef struct S1AP_TAListforMDT {
	A_SEQUENCE_OF(S1AP_TAC_t) list;
	
	/* Context for parsing across buffer boundaries */
	asn_struct_ctx_t _asn_ctx;
} S1AP_TAListforMDT_t;

/* Implementation */
extern asn_TYPE_descriptor_t asn_DEF_S1AP_TAListforMDT;
extern asn_SET_OF_specifics_t asn_SPC_S1AP_TAListforMDT_specs_1;
extern asn_TYPE_member_t asn_MBR_S1AP_TAListforMDT_1[1];
extern asn_per_constraints_t asn_PER_type_S1AP_TAListforMDT_constr_1;

#ifdef __cplusplus
}
#endif

#endif	/* _S1AP_TAListforMDT_H_ */
#include <asn_internal.h>
