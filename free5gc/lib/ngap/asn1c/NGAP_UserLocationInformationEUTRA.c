/*
 * Generated by asn1c-0.9.29 (http://lionet.info/asn1c)
 * From ASN.1 module "NGAP-IEs"
 * 	found in "../support/r14.4.0/38413-e40.asn"
 * 	`asn1c -pdu=all -fcompound-names -findirect-choice -fno-include-deps`
 */

#include "NGAP_UserLocationInformationEUTRA.h"

#include "NGAP_ProtocolExtensionContainer.h"
asn_TYPE_member_t asn_MBR_NGAP_UserLocationInformationEUTRA_1[] = {
	{ ATF_NOFLAGS, 0, offsetof(struct NGAP_UserLocationInformationEUTRA, eUTRA_CGI),
		(ASN_TAG_CLASS_CONTEXT | (0 << 2)),
		-1,	/* IMPLICIT tag at current level */
		&asn_DEF_NGAP_EUTRA_CGI,
		0,
		{ 0, 0, 0 },
		0, 0, /* No default value */
		"eUTRA-CGI"
		},
	{ ATF_NOFLAGS, 0, offsetof(struct NGAP_UserLocationInformationEUTRA, tAI),
		(ASN_TAG_CLASS_CONTEXT | (1 << 2)),
		-1,	/* IMPLICIT tag at current level */
		&asn_DEF_NGAP_TAI,
		0,
		{ 0, 0, 0 },
		0, 0, /* No default value */
		"tAI"
		},
	{ ATF_POINTER, 1, offsetof(struct NGAP_UserLocationInformationEUTRA, iE_Extensions),
		(ASN_TAG_CLASS_CONTEXT | (2 << 2)),
		-1,	/* IMPLICIT tag at current level */
		&asn_DEF_NGAP_ProtocolExtensionContainer_5591P129,
		0,
		{ 0, 0, 0 },
		0, 0, /* No default value */
		"iE-Extensions"
		},
};
static const int asn_MAP_NGAP_UserLocationInformationEUTRA_oms_1[] = { 2 };
static const ber_tlv_tag_t asn_DEF_NGAP_UserLocationInformationEUTRA_tags_1[] = {
	(ASN_TAG_CLASS_UNIVERSAL | (16 << 2))
};
static const asn_TYPE_tag2member_t asn_MAP_NGAP_UserLocationInformationEUTRA_tag2el_1[] = {
    { (ASN_TAG_CLASS_CONTEXT | (0 << 2)), 0, 0, 0 }, /* eUTRA-CGI */
    { (ASN_TAG_CLASS_CONTEXT | (1 << 2)), 1, 0, 0 }, /* tAI */
    { (ASN_TAG_CLASS_CONTEXT | (2 << 2)), 2, 0, 0 } /* iE-Extensions */
};
asn_SEQUENCE_specifics_t asn_SPC_NGAP_UserLocationInformationEUTRA_specs_1 = {
	sizeof(struct NGAP_UserLocationInformationEUTRA),
	offsetof(struct NGAP_UserLocationInformationEUTRA, _asn_ctx),
	asn_MAP_NGAP_UserLocationInformationEUTRA_tag2el_1,
	3,	/* Count of tags in the map */
	asn_MAP_NGAP_UserLocationInformationEUTRA_oms_1,	/* Optional members */
	1, 0,	/* Root/Additions */
	3,	/* First extension addition */
};
asn_TYPE_descriptor_t asn_DEF_NGAP_UserLocationInformationEUTRA = {
	"UserLocationInformationEUTRA",
	"UserLocationInformationEUTRA",
	&asn_OP_SEQUENCE,
	asn_DEF_NGAP_UserLocationInformationEUTRA_tags_1,
	sizeof(asn_DEF_NGAP_UserLocationInformationEUTRA_tags_1)
		/sizeof(asn_DEF_NGAP_UserLocationInformationEUTRA_tags_1[0]), /* 1 */
	asn_DEF_NGAP_UserLocationInformationEUTRA_tags_1,	/* Same as above */
	sizeof(asn_DEF_NGAP_UserLocationInformationEUTRA_tags_1)
		/sizeof(asn_DEF_NGAP_UserLocationInformationEUTRA_tags_1[0]), /* 1 */
	{ 0, 0, SEQUENCE_constraint },
	asn_MBR_NGAP_UserLocationInformationEUTRA_1,
	3,	/* Elements count */
	&asn_SPC_NGAP_UserLocationInformationEUTRA_specs_1	/* Additional specs */
};

