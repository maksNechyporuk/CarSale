﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CarSale.Entities;
using CarSale.ViewModels;
using Helpers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarSale.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly DBContext _context;
        public AdminController( DBContext context)
        {
            _context = context;
        }
        [HttpPost("AddFilter")]
        public IActionResult AddFilter(string value, string name)
        {
            if (!ModelState.IsValid)
            {
                var errors = CustomValidator.GetErrorsByModel(ModelState);
                return BadRequest(errors);
            }
            if (_context.FilterNames.SingleOrDefault(f => f.Name == name) == null)
            {
                _context.FilterNames.Add(
                    new Entities.FilterName
                    {
                        Name = name
                    });
                _context.SaveChanges();
            }
            if (_context.FilterValues
                          .SingleOrDefault(f => f.Name == value) == null)
            {
                _context.FilterValues.Add(
                    new Entities.FilterValue
                    {
                        Name = value
                    });
                _context.SaveChanges();
            }
            var nId = _context.FilterNames
                        .SingleOrDefault(f => f.Name == name).Id;
            var vId = _context.FilterValues
                .SingleOrDefault(f => f.Name == value).Id;
            if (_context.FilterNameGroups
                .SingleOrDefault(f => f.FilterValueId == vId &&
                f.FilterNameId == nId) == null)
            {
                _context.FilterNameGroups.Add(
                    new Entities.FilterNameGroup
                    {
                        FilterNameId = nId,
                        FilterValueId = vId
                    });
                _context.SaveChanges();
            }
            string val = _context.FilterValues
                          .SingleOrDefault(f => f.Id == vId).Name;
            string nam = _context.FilterNames
                          .SingleOrDefault(f => f.Id == nId).Name;
            return Ok(nam + " " + val);
        }
    }
}