using BusinessLayer.ViewModels.GSD;
using DataRepository.Models;
using EnterpriseSystem.ViewModels.HumanResources;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DataRepository.DataAccessLayer.GSD
{
    public class SMVDetail
    {
        EnterpriseSystemESEntities _db = new EnterpriseSystemESEntities();
        TimeZoneInfo setTimeZoneInfo;
        DateTime currentDateTime;

        public tbl_SMVModel RetriveWorkingNo(tbl_SMVModel ObjSMV)
        {
            return _db.Database.SqlQuery<tbl_SMVModel>("Exec [dbo].[RetrieveWorkigNoDetail] {0}", new object[] { ObjSMV.WorkingNo }).FirstOrDefault();
        }
        public List<tbl_DropDownsModel> RetrieveCustomers()
        {
            return _db.Database.SqlQuery<tbl_DropDownsModel>("Exec [dbo].[RetrieveCustomers] ").ToList();
        }
        public tbl_SMVModel SaveSMVDetail(tbl_SMVModel Objsmv)
        {
            setTimeZoneInfo = TimeZoneInfo.FindSystemTimeZoneById("Pakistan Standard Time");
            currentDateTime = TimeZoneInfo.ConvertTime(DateTime.Now, setTimeZoneInfo);
            return _db.Database.SqlQuery<tbl_SMVModel>("Exec [dbo].[SaveSMVMaster] {0},{1},{2},{3},{4},{5},{6},{7},{8},{9},{10},{11},{12},{13},{14},{15},{16},{17},{18},{19},{20}", new object[] { Objsmv.CompanyName, Objsmv.CustomerID, Objsmv.Area, Objsmv.Stage, Objsmv.Season, Objsmv.WorkingNo, Objsmv.ArticleNo, Objsmv.ProductName, Objsmv.Category, Objsmv.CarryOverSeason, Objsmv.ManualOperations, Objsmv.MachineOperations, Objsmv.OperationsofBag, Objsmv.ComplexityLevel, Objsmv.Manpower, Objsmv.HourlyTarget, Objsmv.DevelopmentInstructions, Objsmv.CostingInstructions, Objsmv.ProductionInstructions, Objsmv.CreatedBy, currentDateTime.ToString("yyyy-MM-dd") }).FirstOrDefault();
        }
        public tbl_SMVCalculationModel SaveCustomerSMVDetail(tbl_SMVCalculationModel Objsmv)
        {

            setTimeZoneInfo = TimeZoneInfo.FindSystemTimeZoneById("Pakistan Standard Time");
            currentDateTime = TimeZoneInfo.ConvertTime(DateTime.Now, setTimeZoneInfo);
            return _db.Database.SqlQuery<tbl_SMVCalculationModel>("Exec [dbo].[SaveCustomerSMV] {0},{1},{2},{3},{4},{5},{6},{7},{8},{9}", new object[] { Objsmv.SMVID, Objsmv.C_SewingSMV, Objsmv.C_CuttingSMV, Objsmv.C_InspectionSMV, Objsmv.C_ScanPackSMV, Objsmv.C_TotalSMV, Objsmv.C_MPCategory, Objsmv.C_MatchPoints, Objsmv.CreatedBy, currentDateTime.ToString("yyyy-MM-dd") }).FirstOrDefault();
        }
        public tbl_SMVCalculationModel SaveInternalSMVDetail(tbl_SMVCalculationModel Objsmv)
        {
            setTimeZoneInfo = TimeZoneInfo.FindSystemTimeZoneById("Pakistan Standard Time");
            currentDateTime = TimeZoneInfo.ConvertTime(DateTime.Now, setTimeZoneInfo);
            return _db.Database.SqlQuery<tbl_SMVCalculationModel>("Exec [dbo].[SaveInternalSMV] {0},{1},{2},{3},{4},{5},{6},{7},{8},{9}", new object[] { Objsmv.SMVID, Objsmv.SewingSMV, Objsmv.CuttingSMV, Objsmv.InspectionSMV, Objsmv.ScanPackSMV, Objsmv.TotalSMV, Objsmv.MPCategory, Objsmv.MatchPoints, Objsmv.CreatedBy, currentDateTime.ToString("yyyy-MM-dd") }).FirstOrDefault();
        }
        public tbl_SMVCalculationModel SaveCostingSMVDetail(tbl_SMVCalculationModel Objsmv)
        {
            setTimeZoneInfo = TimeZoneInfo.FindSystemTimeZoneById("Pakistan Standard Time");
            currentDateTime = TimeZoneInfo.ConvertTime(DateTime.Now, setTimeZoneInfo);
            return _db.Database.SqlQuery<tbl_SMVCalculationModel>("Exec [dbo].[SaveCostingSMV] {0},{1},{2},{3},{4},{5},{6},{7},{8},{9},{10},{11},{12},{13}", new object[] { Objsmv.SMVID, Objsmv.ct_TotalSMVFormula, Objsmv.ct_ThreadConsumption, Objsmv.ct_ReferenceDocument,  Objsmv.ct_ReleaseToCosting, Objsmv.ct_SewingSMV, Objsmv.ct_CuttingSMV, Objsmv.ct_InspectionSMV,Objsmv.ct_ScanPackSMV,Objsmv.ct_TotalSMV, Objsmv.ct_MPCategory, Objsmv.ct_MatchPoints, Objsmv.CreatedBy, currentDateTime.ToString("yyyy-MM-dd") }).FirstOrDefault();
        }
        public List<tbl_SMVModel> RetrieveSMVDetail()
        {
            return _db.Database.SqlQuery<tbl_SMVModel>("Exec [dbo].[RetrieveSMVDetail]").ToList();
        }
        public tbl_SMVCalculationModel RetrieveSMVDetailByID(int SMVID)
        {
            return _db.Database.SqlQuery<tbl_SMVCalculationModel>("Exec [dbo].[RetrieveSMVDetailBySMVID] {0}", new object[] { SMVID }).FirstOrDefault();
        }
    }
}