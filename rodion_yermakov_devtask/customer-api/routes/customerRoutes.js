const express = require('express');
const { displayCustomerInfo, addCustomerInfo } = require('../controllers/customerController');

const router = express.Router();

/**
 * @swagger
 * /CustomerInfo:
 *   get:
 *     summary: gets a customers basic information
 *     description: By passing in the Customers unique identifier you will get that users basic information
 *     parameters:
 *       - in: query
 *         name: searchString
 *         schema:
 *           type: string
 *         description: pass an optional search string for looking up inventory
 *     responses:
 *       200:
 *         description: search results matching criteria
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CustomerBasicInfo'
 *       400:
 *         description: Could not find the customer
 *   post:
 *     summary: adds CustomerInfo
 *     description: Adds CustomerInfo to the system
 *     requestBody:
 *       description: CustomerInfo to add
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CustomerBasicInfo'
 *     responses:
 *       201:
 *         description: item created
 *       400:
 *         description: invalid input, object invalid
 *       409:
 *         description: an existing Customer with this id already exists
 */
router.get('/CustomerInfo', displayCustomerInfo);
router.post('/CustomerInfo', addCustomerInfo);

module.exports = router;
