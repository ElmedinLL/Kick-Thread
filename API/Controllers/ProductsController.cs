using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly StoreContext context;
        public ProductsController(StoreContext context)
        {
            this.context = context;
        }


        [HttpGet]
        public ActionResult<List<Product>> GetProducts()
        {
            return context.Products.ToList();

        }

        [HttpGet("{id}")] //api/products/2
        public ActionResult<Product> GetProduct(int id)
        {
            var product = context.Products.Find(id);

            if (product is null) return NotFound();

            return product;

        }
    }
}
