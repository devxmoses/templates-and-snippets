"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentStatus = exports.OrderStatus = exports.ProductStatus = exports.VendorStatus = exports.Role = void 0;
exports.Role = {
    CUSTOMER: 'CUSTOMER',
    VENDOR: 'VENDOR',
    ADMIN: 'ADMIN'
};
exports.VendorStatus = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    SUSPENDED: 'SUSPENDED',
    REJECTED: 'REJECTED'
};
exports.ProductStatus = {
    DRAFT: 'DRAFT',
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
    ARCHIVED: 'ARCHIVED'
};
exports.OrderStatus = {
    PENDING: 'PENDING',
    CONFIRMED: 'CONFIRMED',
    PROCESSING: 'PROCESSING',
    SHIPPED: 'SHIPPED',
    DELIVERED: 'DELIVERED',
    CANCELLED: 'CANCELLED',
    REFUNDED: 'REFUNDED'
};
exports.PaymentStatus = {
    PENDING: 'PENDING',
    PAID: 'PAID',
    FAILED: 'FAILED',
    REFUNDED: 'REFUNDED',
    PARTIALLY_REFUNDED: 'PARTIALLY_REFUNDED'
};
//# sourceMappingURL=enums.js.map