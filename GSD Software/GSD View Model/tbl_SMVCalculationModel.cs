using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BusinessLayer.ViewModels.GSD
{
    public class tbl_SMVCalculationModel
    {
        public int SMVID { get; set; }
        public decimal C_SewingSMV { get; set; }
        public decimal C_CuttingSMV { get; set; }
        public decimal C_InspectionSMV { get; set; }
        public decimal C_ScanPackSMV { get; set; }
        public decimal C_TotalSMV { get; set; }
        public string C_MPCategory { get; set; }
        public decimal C_MatchPoints { get; set; }
        public decimal SewingSMV { get; set; }
        public decimal CuttingSMV { get; set; }
        public decimal InspectionSMV { get; set; }
        public decimal ScanPackSMV { get; set; }
        public decimal TotalSMV { get; set; }
        public string MPCategory { get; set; }
        public decimal MatchPoints { get; set; }

        public string ct_TotalSMVFormula { get; set; }
        public string ct_ThreadConsumption { get; set; }
        public string ct_ReferenceDocument { get; set; }
        public string ct_ReleaseToCosting { get; set; }
        public decimal ct_SewingSMV { get; set; }
        public decimal ct_CuttingSMV { get; set; }
        public decimal ct_InspectionSMV { get; set; }
        public decimal ct_ScanPackSMV { get; set; }
        public decimal ct_TotalSMV { get; set; }
        public string ct_MPCategory { get; set; }
        public decimal ct_MatchPoints { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedDateTime { get; set; }
        public int AlertMessage { get; set; }
    }
}