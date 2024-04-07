// Function to generate a random integer within a specified range
function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export interface Transaction {
  date: Date;
  merchant: string;
  category: string;
  amount: number;
  currency: string;
}

// Function to generate a random credit card transaction
function generateTransaction() {
  const merchants = ["Amazon", "Walmart", "Target", "Best Buy", "Starbucks"];
  const categories = ["Shopping", "Food & Drink", "Entertainment", "Travel", "Utilities"];

  const transaction = {
    date: new Date(),
    merchant: merchants[getRandomInt(0, merchants.length - 1)],
    category: categories[getRandomInt(0, categories.length - 1)],
    amount: getRandomInt(100, 10000) / 100, // Random amount between 1.00 and 100.00
    currency: "USD"
  };

  return transaction;
}

// Function to generate an array of mock credit card transactions
export function generateTransactions(numTransactions: number):Transaction[] {
  const transactions = [];
  for (let i = 0; i < numTransactions; i++) {
    transactions.push(generateTransaction());
  }
  return transactions;
}

