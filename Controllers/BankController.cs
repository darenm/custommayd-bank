using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace custommayd_bank.Controllers
{
    [Route("api/[controller]")]
    public class BankController : Controller
    {
        private static readonly AccountSummary[] AccountSummaries =
        {
            new AccountSummary
            {
                AccountNumber = "012-123-1234",
                Type = AccountType.Checking,
                Name = "John's Checking - server",
                Balance = 1234.56
            },
            new AccountSummary
            {
                AccountNumber = "567-234-5586",
                Type = AccountType.Savings,
                Name = "John's Holiday Stash - server",
                Balance = 5000.27
            },
            new AccountSummary
            {
                AccountNumber = "9999-2222-3333-4444",
                Type = AccountType.Credit,
                Name = "Platinum Card - server",
                Balance = 1234.56
            }
        };

        [HttpGet("[action]/{id}")]
        public IActionResult GetAccountDetail(string id)
        {
            var summary = AccountSummaries.FirstOrDefault(a => a.AccountNumber == id);
            if (summary == null)
            {
                return NotFound();
            }

            var random = new Random();
            var transactions = new List<AccountTransaction>();
            for (var i = 0; i < 15; i++)
            {
                transactions.Add(new AccountTransaction
                {
                    TransactionDate = DateTimeOffset.Now - TimeSpan.FromDays(i),
                    Description = $"Server transaction #{i}",
                    Amount = random.NextDouble() * 500 - 250
                });
            }

            return new ObjectResult(new AccountDetail
            {
                AccountSummary = summary,
                AccountTransactions = transactions.ToArray()
            });
        }

        [HttpGet("[action]")]
        public IActionResult GetAccountSummaries()
        {
            return new ObjectResult(AccountSummaries);
        }
    }

    public enum AccountType
    {
        Checking,
        Savings,
        Credit
    }

    public class AccountSummary
    {
        public string AccountNumber { get; set; }
        public AccountType Type { get; set; }
        public string Name { get; set; }
        public double Balance { get; set; }
    }

    public class AccountTransaction
    {
        public DateTimeOffset TransactionDate { get; set; }
        public string Description { get; set; }
        public double Amount { get; set; }
    }

    public class AccountDetail
    {
        public AccountSummary AccountSummary { get; set; }
        public AccountTransaction[] AccountTransactions { get; set; }
    }
}