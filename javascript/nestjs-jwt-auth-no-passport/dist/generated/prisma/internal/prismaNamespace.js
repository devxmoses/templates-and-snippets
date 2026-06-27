"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.JsonNullValueInput = exports.NullableJsonNullValueInput = exports.SortOrder = exports.PayoutScalarFieldEnum = exports.PaymentScalarFieldEnum = exports.VendorOrderItemScalarFieldEnum = exports.VendorOrderScalarFieldEnum = exports.OrderScalarFieldEnum = exports.CartItemScalarFieldEnum = exports.ReviewScalarFieldEnum = exports.ProductImageScalarFieldEnum = exports.ProductVariantScalarFieldEnum = exports.ProductScalarFieldEnum = exports.NotificationScalarFieldEnum = exports.VendorScalarFieldEnum = exports.AddressScalarFieldEnum = exports.CategoryScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.8.0",
    engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Category: 'Category',
    Address: 'Address',
    Vendor: 'Vendor',
    Notification: 'Notification',
    Product: 'Product',
    ProductVariant: 'ProductVariant',
    ProductImage: 'ProductImage',
    Review: 'Review',
    CartItem: 'CartItem',
    Order: 'Order',
    VendorOrder: 'VendorOrder',
    VendorOrderItem: 'VendorOrderItem',
    Payment: 'Payment',
    Payout: 'Payout'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    avatarUrl: 'avatarUrl',
    role: 'role',
    isEmailVerified: 'isEmailVerified',
    refreshToken: 'refreshToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.CategoryScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    imageUrl: 'imageUrl',
    parentId: 'parentId',
    sortOrder: 'sortOrder',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AddressScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    label: 'label',
    line1: 'line1',
    line2: 'line2',
    city: 'city',
    state: 'state',
    postalCode: 'postalCode',
    country: 'country',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.VendorScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    storeName: 'storeName',
    storeSlug: 'storeSlug',
    description: 'description',
    logoUrl: 'logoUrl',
    bannerUrl: 'bannerUrl',
    status: 'status',
    commissionRate: 'commissionRate',
    stripeAccountId: 'stripeAccountId',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.NotificationScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    type: 'type',
    title: 'title',
    message: 'message',
    data: 'data',
    isRead: 'isRead',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ProductScalarFieldEnum = {
    id: 'id',
    vendorId: 'vendorId',
    categoryId: 'categoryId',
    name: 'name',
    slug: 'slug',
    description: 'description',
    basePrice: 'basePrice',
    comparePrice: 'comparePrice',
    status: 'status',
    tags: 'tags',
    metadata: 'metadata',
    isPublished: 'isPublished',
    rating: 'rating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.ProductVariantScalarFieldEnum = {
    id: 'id',
    productId: 'productId',
    sku: 'sku',
    name: 'name',
    price: 'price',
    stock: 'stock',
    attributes: 'attributes',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ProductImageScalarFieldEnum = {
    id: 'id',
    productId: 'productId',
    url: 'url',
    altText: 'altText',
    isPrimary: 'isPrimary',
    sortOrder: 'sortOrder'
};
exports.ReviewScalarFieldEnum = {
    id: 'id',
    productId: 'productId',
    userId: 'userId',
    rating: 'rating',
    title: 'title',
    body: 'body',
    isVerifiedPurchase: 'isVerifiedPurchase',
    isApproved: 'isApproved',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CartItemScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    productVariantId: 'productVariantId',
    quantity: 'quantity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.OrderScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    addressId: 'addressId',
    orderNumber: 'orderNumber',
    status: 'status',
    paymentStatus: 'paymentStatus',
    subTotal: 'subTotal',
    shippingTotal: 'shippingTotal',
    taxTotal: 'taxTotal',
    discountTotal: 'discountTotal',
    total: 'total',
    stripePaymentId: 'stripePaymentId',
    notes: 'notes',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.VendorOrderScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    vendorId: 'vendorId',
    status: 'status',
    subTotal: 'subTotal',
    commission: 'commission',
    total: 'total',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.VendorOrderItemScalarFieldEnum = {
    id: 'id',
    vendorOrderId: 'vendorOrderId',
    productVariantId: 'productVariantId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    totalPrice: 'totalPrice',
    snapshot: 'snapshot'
};
exports.PaymentScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    stripePaymentId: 'stripePaymentId',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    transactionId: 'transactionId',
    metadata: 'metadata',
    createdAt: 'createdAt'
};
exports.PayoutScalarFieldEnum = {
    id: 'id',
    vendorId: 'vendorId',
    amount: 'amount',
    currency: 'currency',
    stripeTransferId: 'stripeTransferId',
    status: 'status',
    processedAt: 'processedAt',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.JsonNullValueInput = {
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map