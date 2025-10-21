using BusinessLayer.ViewModels.GSD;
using DataRepository.DataAccessLayer.GSD;
using DataRepository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EnterpriseSystem.Controllers
{
    public class GSDController : Controller
    {
        SMVDetail Objsmv = new SMVDetail();
        EnterpriseSystemESEntities _db = new EnterpriseSystemESEntities();
        // GET: GSD
        public ActionResult GSDSetup()
        {
            if (Session["ESUserSession"] != null)
            {
                return View();
            }
            else
            {
                return RedirectToAction("Login", "Home");
            }
        }
        public ActionResult OperationsGSD()
        {
            if (Session["ESUserSession"] != null)
            {
                return View();
            }
            else
            {
                return RedirectToAction("Login", "Home");
            }
        }
        public ActionResult SMVs()
        {
            if (Session["ESUserSession"] != null)
            {
                return View();
            }
            else
            {
                return RedirectToAction("Login", "Home");
            }
        }
        #region SMVs
        public ActionResult RetriveWorkingNo(tbl_SMVModel Objsmvs)
        {
            if (Session["ESUserSession"] != null)
            {
                return Json(Objsmv.RetriveWorkingNo(Objsmvs), JsonRequestBehavior.AllowGet);
            }
            else
            {
                return RedirectToAction("Login", "Home");
            }
        }
        public ActionResult RetrieveCustomers()
        {
            if (Session["ESUserSession"] != null)
            {
                return Json(Objsmv.RetrieveCustomers(), JsonRequestBehavior.AllowGet);
            }
            else
            {
                return RedirectToAction("Login", "Home");
            }
        }
        public ActionResult SaveSMVDetail(tbl_SMVModel Objsmvdetail)
        {
            if (Session["ESUserSession"] != null)
            {
                Objsmvdetail.CreatedBy = Session["FullName"].ToString();
                return Json(Objsmv.SaveSMVDetail(Objsmvdetail), JsonRequestBehavior.AllowGet);
            }
            else
            {
                return RedirectToAction("Login", "Home");
            }
        }
        public ActionResult SaveCustomerSMVDetail(tbl_SMVCalculationModel Objcustomersmv)
        {
            if (Session["ESUserSession"] != null)
            {
                Objcustomersmv.CreatedBy = Session["FullName"].ToString();
                return Json(Objsmv.SaveCustomerSMVDetail(Objcustomersmv), JsonRequestBehavior.AllowGet);
            }
            else
            {
                return RedirectToAction("Login", "Home");
            }
        }
        public ActionResult SaveInternalSMVDetail(tbl_SMVCalculationModel Objsmvdetail)
        {
            if (Session["ESUserSession"] != null)
            {
                Objsmvdetail.CreatedBy = Session["FullName"].ToString();
                return Json(Objsmv.SaveInternalSMVDetail(Objsmvdetail), JsonRequestBehavior.AllowGet);
            }
            else
            {
                return RedirectToAction("Login", "Home");
            }
        }
        public ActionResult SaveCostingSMVDetail(tbl_SMVCalculationModel Objsmvdetail)
        {
            if (Session["ESUserSession"] != null)
            {
                Objsmvdetail.CreatedBy = Session["FullName"].ToString();
                return Json(Objsmv.SaveCostingSMVDetail(Objsmvdetail), JsonRequestBehavior.AllowGet);


            }
            else
            {
                return RedirectToAction("Login", "Home");
            }
        }
        public ActionResult RetrieveSMVDetail()
        {
            if (Session["ESUserSession"] != null)
            {
                return Json(Objsmv.RetrieveSMVDetail(), JsonRequestBehavior.AllowGet);
            }
            else
            {
                return RedirectToAction("Login", "Home");
            }
        }
        public ActionResult SMVDetail(int SMVID)
        {
            if (Session["ESUserSession"] != null)
            {
                tbl_SMVCalculationModel ObjsmvModel = Objsmv.RetrieveSMVDetailByID(SMVID);
                return View(ObjsmvModel);
            }
            else
            {
                return RedirectToAction("Login", "Home");
            }
        }

        #endregion


        #region GSDDataSoftware
        public ActionResult GSDDataSoftware()
        {
            if (Session["ESUserSession"] != null)
            {
                return View();
            }
            else
            {
                return RedirectToAction("Login", "Home");
            }
        }
        public ActionResult GSDOperations()
        {
            if (Session["ESUserSession"] != null)
            {
                return PartialView();
            }
            else
            {
                return RedirectToAction("Login", "Home");
            }
        }
        public ActionResult GSDFeatures()
        {
            if (Session["ESUserSession"] != null)
            {
                return PartialView();
            }
            else
            {
                return RedirectToAction("Login", "Home");
            }
        }
        public ActionResult GSDMacro()
        {
            if (Session["ESUserSession"] != null)
            {
                return PartialView();
            }
            else
            {
                return RedirectToAction("Login", "Home");
            }
        }
        public ActionResult GSDStyle()
        {
            if (Session["ESUserSession"] != null)
            {
                return PartialView();
            }
            else
            {
                return RedirectToAction("Login", "Home");
            }
        }
        #endregion

    }
}