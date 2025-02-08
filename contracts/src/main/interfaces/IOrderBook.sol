// SPDX-License-Identifier: MIT
pragma solidity =0.8.19;

interface IOrderBook {
    struct OrderDetail {
        uint8 orderType;        // 0 = Market, 1 = Limit, etc.
        bool isReduceOnly;
        uint256 price;          // For limit orders
        uint256 expiry;
        uint256 cancelOrderId;
        uint256 executionFee;
        uint256 trailingStopPercentage;
    }

    struct Order {
        address user;
        uint96 margin;
        address asset;
        bytes10 market;
        bool isLong;
        uint96 size;
        uint96 fee;
        uint32 timestamp;
        uint32 orderId;
        OrderDetail orderDetail;
    }

    function add(Order memory _order) external returns (uint32);
    function remove(uint32 _orderId) external;
    function get(uint32 _orderId) external view returns (Order memory);
}