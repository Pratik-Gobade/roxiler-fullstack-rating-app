import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

// =============================
// 📌 GET ALL TRANSACTIONS
// =============================
export const getTransactions = async (req, res) => {
  try {
    const { month, search = "" } = req.query;

    const where = {
      AND: [
        month
          ? {
              dateOfSale: {
                gte: new Date(`2023-${month}-01`),
                lt: new Date(`2023-${month}-31`)
              }
            }
          : {},
        search
          ? {
              OR: [
                { title: { contains: search, mode: "insensitive" } },
                { description: { contains: search, mode: "insensitive" } },
                { category: { contains: search, mode: "insensitive" } }
              ]
            }
          : {}
      ],
    };

    const transactions = await prisma.transaction.findMany({ where });

    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// =============================
// 📌 STATISTICS API
// =============================
export const getStatistics = async (req, res) => {
  try {
    const { month } = req.query;

    const where = month
      ? {
          dateOfSale: {
            gte: new Date(`2023-${month}-01`),
            lt: new Date(`2023-${month}-31`)
          }
        }
      : {};

    const totalSaleAmount = await prisma.transaction.aggregate({
      where,
      _sum: { price: true }
    });

    const totalSold = await prisma.transaction.count({
      where: { ...where, sold: true }
    });

    const totalNotSold = await prisma.transaction.count({
      where: { ...where, sold: false }
    });

    res.json({
      totalSaleAmount: totalSaleAmount._sum.price || 0,
      totalSold,
      totalNotSold
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// =============================
// 📌 BAR CHART API
// =============================
export const getBarChart = async (req, res) => {
  try {
    const { month } = req.query;

    const where = month
      ? {
          dateOfSale: {
            gte: new Date(`2023-${month}-01`),
            lt: new Date(`2023-${month}-31`)
          }
        }
      : {};

    const bar = await prisma.transaction.groupBy({
      by: ["category"],
      _count: { category: true },
      where
    });

    res.json(bar);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// =============================
// 📌 PIE CHART API
// =============================
export const getPieChart = async (req, res) => {
  try {
    const pie = await prisma.transaction.groupBy({
      by: ["price"],
      _count: { price: true }
    });

    res.json(pie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// =============================
// 📌 COMBINED API
// =============================
export const getCombinedData = async (req, res) => {
  try {
    const all = await prisma.transaction.findMany();

    res.json(all);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};