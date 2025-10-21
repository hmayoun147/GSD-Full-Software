using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BusinessLayer.ViewModels.GSD
{
    public class tbl_SMVModel
    {
        public int SMVID { get; set; }
        public string WorkingNo { get; set; }
        public string ArticleNo { get; set; }
        public string ProductName { get; set; }
        public string CompanyName { get; set; }
        public int CustomerID { get; set; }
        public string Area { get; set; }
        public string Stage { get; set; }
        public string Season { get; set; }
        public string Category { get; set; }
        public string CarryOverSeason { get; set; }
        public string ManualOperations { get; set; }
        public string MachineOperations { get; set; }
        public string OperationsofBag { get; set; }
        public string ComplexityLevel { get; set; }
        public string Manpower { get; set; }
        public string HourlyTarget { get; set; }
        public string DevelopmentInstructions { get; set; }
        public string CostingInstructions { get; set; }
        public string ProductionInstructions { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedDateTime { get; set; }
        public int AlertMessage { get; set; }
    }
}