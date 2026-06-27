import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProductVariantModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductVariantPayload>;
export type AggregateProductVariant = {
    _count: ProductVariantCountAggregateOutputType | null;
    _avg: ProductVariantAvgAggregateOutputType | null;
    _sum: ProductVariantSumAggregateOutputType | null;
    _min: ProductVariantMinAggregateOutputType | null;
    _max: ProductVariantMaxAggregateOutputType | null;
};
export type ProductVariantAvgAggregateOutputType = {
    price: runtime.Decimal | null;
    stock: number | null;
};
export type ProductVariantSumAggregateOutputType = {
    price: runtime.Decimal | null;
    stock: number | null;
};
export type ProductVariantMinAggregateOutputType = {
    id: string | null;
    productId: string | null;
    sku: string | null;
    name: string | null;
    price: runtime.Decimal | null;
    stock: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductVariantMaxAggregateOutputType = {
    id: string | null;
    productId: string | null;
    sku: string | null;
    name: string | null;
    price: runtime.Decimal | null;
    stock: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductVariantCountAggregateOutputType = {
    id: number;
    productId: number;
    sku: number;
    name: number;
    price: number;
    stock: number;
    attributes: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProductVariantAvgAggregateInputType = {
    price?: true;
    stock?: true;
};
export type ProductVariantSumAggregateInputType = {
    price?: true;
    stock?: true;
};
export type ProductVariantMinAggregateInputType = {
    id?: true;
    productId?: true;
    sku?: true;
    name?: true;
    price?: true;
    stock?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductVariantMaxAggregateInputType = {
    id?: true;
    productId?: true;
    sku?: true;
    name?: true;
    price?: true;
    stock?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductVariantCountAggregateInputType = {
    id?: true;
    productId?: true;
    sku?: true;
    name?: true;
    price?: true;
    stock?: true;
    attributes?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProductVariantAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductVariantWhereInput;
    orderBy?: Prisma.ProductVariantOrderByWithRelationInput | Prisma.ProductVariantOrderByWithRelationInput[];
    cursor?: Prisma.ProductVariantWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductVariantCountAggregateInputType;
    _avg?: ProductVariantAvgAggregateInputType;
    _sum?: ProductVariantSumAggregateInputType;
    _min?: ProductVariantMinAggregateInputType;
    _max?: ProductVariantMaxAggregateInputType;
};
export type GetProductVariantAggregateType<T extends ProductVariantAggregateArgs> = {
    [P in keyof T & keyof AggregateProductVariant]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProductVariant[P]> : Prisma.GetScalarType<T[P], AggregateProductVariant[P]>;
};
export type ProductVariantGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductVariantWhereInput;
    orderBy?: Prisma.ProductVariantOrderByWithAggregationInput | Prisma.ProductVariantOrderByWithAggregationInput[];
    by: Prisma.ProductVariantScalarFieldEnum[] | Prisma.ProductVariantScalarFieldEnum;
    having?: Prisma.ProductVariantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductVariantCountAggregateInputType | true;
    _avg?: ProductVariantAvgAggregateInputType;
    _sum?: ProductVariantSumAggregateInputType;
    _min?: ProductVariantMinAggregateInputType;
    _max?: ProductVariantMaxAggregateInputType;
};
export type ProductVariantGroupByOutputType = {
    id: string;
    productId: string;
    sku: string;
    name: string;
    price: runtime.Decimal;
    stock: number;
    attributes: runtime.JsonValue;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: ProductVariantCountAggregateOutputType | null;
    _avg: ProductVariantAvgAggregateOutputType | null;
    _sum: ProductVariantSumAggregateOutputType | null;
    _min: ProductVariantMinAggregateOutputType | null;
    _max: ProductVariantMaxAggregateOutputType | null;
};
export type GetProductVariantGroupByPayload<T extends ProductVariantGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductVariantGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductVariantGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductVariantGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductVariantGroupByOutputType[P]>;
}>>;
export type ProductVariantWhereInput = {
    AND?: Prisma.ProductVariantWhereInput | Prisma.ProductVariantWhereInput[];
    OR?: Prisma.ProductVariantWhereInput[];
    NOT?: Prisma.ProductVariantWhereInput | Prisma.ProductVariantWhereInput[];
    id?: Prisma.StringFilter<"ProductVariant"> | string;
    productId?: Prisma.StringFilter<"ProductVariant"> | string;
    sku?: Prisma.StringFilter<"ProductVariant"> | string;
    name?: Prisma.StringFilter<"ProductVariant"> | string;
    price?: Prisma.DecimalFilter<"ProductVariant"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFilter<"ProductVariant"> | number;
    attributes?: Prisma.JsonFilter<"ProductVariant">;
    isActive?: Prisma.BoolFilter<"ProductVariant"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ProductVariant"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProductVariant"> | Date | string;
    cartItems?: Prisma.CartItemListRelationFilter;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    vendorOrderItems?: Prisma.VendorOrderItemListRelationFilter;
};
export type ProductVariantOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    attributes?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    cartItems?: Prisma.CartItemOrderByRelationAggregateInput;
    product?: Prisma.ProductOrderByWithRelationInput;
    vendorOrderItems?: Prisma.VendorOrderItemOrderByRelationAggregateInput;
};
export type ProductVariantWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    sku?: string;
    AND?: Prisma.ProductVariantWhereInput | Prisma.ProductVariantWhereInput[];
    OR?: Prisma.ProductVariantWhereInput[];
    NOT?: Prisma.ProductVariantWhereInput | Prisma.ProductVariantWhereInput[];
    productId?: Prisma.StringFilter<"ProductVariant"> | string;
    name?: Prisma.StringFilter<"ProductVariant"> | string;
    price?: Prisma.DecimalFilter<"ProductVariant"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFilter<"ProductVariant"> | number;
    attributes?: Prisma.JsonFilter<"ProductVariant">;
    isActive?: Prisma.BoolFilter<"ProductVariant"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ProductVariant"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProductVariant"> | Date | string;
    cartItems?: Prisma.CartItemListRelationFilter;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    vendorOrderItems?: Prisma.VendorOrderItemListRelationFilter;
}, "id" | "sku">;
export type ProductVariantOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    attributes?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProductVariantCountOrderByAggregateInput;
    _avg?: Prisma.ProductVariantAvgOrderByAggregateInput;
    _max?: Prisma.ProductVariantMaxOrderByAggregateInput;
    _min?: Prisma.ProductVariantMinOrderByAggregateInput;
    _sum?: Prisma.ProductVariantSumOrderByAggregateInput;
};
export type ProductVariantScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductVariantScalarWhereWithAggregatesInput | Prisma.ProductVariantScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductVariantScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductVariantScalarWhereWithAggregatesInput | Prisma.ProductVariantScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProductVariant"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"ProductVariant"> | string;
    sku?: Prisma.StringWithAggregatesFilter<"ProductVariant"> | string;
    name?: Prisma.StringWithAggregatesFilter<"ProductVariant"> | string;
    price?: Prisma.DecimalWithAggregatesFilter<"ProductVariant"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntWithAggregatesFilter<"ProductVariant"> | number;
    attributes?: Prisma.JsonWithAggregatesFilter<"ProductVariant">;
    isActive?: Prisma.BoolWithAggregatesFilter<"ProductVariant"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ProductVariant"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ProductVariant"> | Date | string;
};
export type ProductVariantCreateInput = {
    id?: string;
    sku: string;
    name: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    attributes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cartItems?: Prisma.CartItemCreateNestedManyWithoutProductVariantInput;
    product: Prisma.ProductCreateNestedOneWithoutVariantsInput;
    vendorOrderItems?: Prisma.VendorOrderItemCreateNestedManyWithoutProductVariantInput;
};
export type ProductVariantUncheckedCreateInput = {
    id?: string;
    productId: string;
    sku: string;
    name: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    attributes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cartItems?: Prisma.CartItemUncheckedCreateNestedManyWithoutProductVariantInput;
    vendorOrderItems?: Prisma.VendorOrderItemUncheckedCreateNestedManyWithoutProductVariantInput;
};
export type ProductVariantUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cartItems?: Prisma.CartItemUpdateManyWithoutProductVariantNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutVariantsNestedInput;
    vendorOrderItems?: Prisma.VendorOrderItemUpdateManyWithoutProductVariantNestedInput;
};
export type ProductVariantUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cartItems?: Prisma.CartItemUncheckedUpdateManyWithoutProductVariantNestedInput;
    vendorOrderItems?: Prisma.VendorOrderItemUncheckedUpdateManyWithoutProductVariantNestedInput;
};
export type ProductVariantCreateManyInput = {
    id?: string;
    productId: string;
    sku: string;
    name: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    attributes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductVariantUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductVariantUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductVariantListRelationFilter = {
    every?: Prisma.ProductVariantWhereInput;
    some?: Prisma.ProductVariantWhereInput;
    none?: Prisma.ProductVariantWhereInput;
};
export type ProductVariantOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductVariantCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    attributes?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductVariantAvgOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
};
export type ProductVariantMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductVariantMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductVariantSumOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
};
export type ProductVariantScalarRelationFilter = {
    is?: Prisma.ProductVariantWhereInput;
    isNot?: Prisma.ProductVariantWhereInput;
};
export type ProductVariantCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ProductVariantCreateWithoutProductInput, Prisma.ProductVariantUncheckedCreateWithoutProductInput> | Prisma.ProductVariantCreateWithoutProductInput[] | Prisma.ProductVariantUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductVariantCreateOrConnectWithoutProductInput | Prisma.ProductVariantCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ProductVariantCreateManyProductInputEnvelope;
    connect?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
};
export type ProductVariantUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ProductVariantCreateWithoutProductInput, Prisma.ProductVariantUncheckedCreateWithoutProductInput> | Prisma.ProductVariantCreateWithoutProductInput[] | Prisma.ProductVariantUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductVariantCreateOrConnectWithoutProductInput | Prisma.ProductVariantCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ProductVariantCreateManyProductInputEnvelope;
    connect?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
};
export type ProductVariantUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductVariantCreateWithoutProductInput, Prisma.ProductVariantUncheckedCreateWithoutProductInput> | Prisma.ProductVariantCreateWithoutProductInput[] | Prisma.ProductVariantUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductVariantCreateOrConnectWithoutProductInput | Prisma.ProductVariantCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ProductVariantUpsertWithWhereUniqueWithoutProductInput | Prisma.ProductVariantUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ProductVariantCreateManyProductInputEnvelope;
    set?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    disconnect?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    delete?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    connect?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    update?: Prisma.ProductVariantUpdateWithWhereUniqueWithoutProductInput | Prisma.ProductVariantUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ProductVariantUpdateManyWithWhereWithoutProductInput | Prisma.ProductVariantUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ProductVariantScalarWhereInput | Prisma.ProductVariantScalarWhereInput[];
};
export type ProductVariantUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductVariantCreateWithoutProductInput, Prisma.ProductVariantUncheckedCreateWithoutProductInput> | Prisma.ProductVariantCreateWithoutProductInput[] | Prisma.ProductVariantUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductVariantCreateOrConnectWithoutProductInput | Prisma.ProductVariantCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ProductVariantUpsertWithWhereUniqueWithoutProductInput | Prisma.ProductVariantUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ProductVariantCreateManyProductInputEnvelope;
    set?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    disconnect?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    delete?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    connect?: Prisma.ProductVariantWhereUniqueInput | Prisma.ProductVariantWhereUniqueInput[];
    update?: Prisma.ProductVariantUpdateWithWhereUniqueWithoutProductInput | Prisma.ProductVariantUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ProductVariantUpdateManyWithWhereWithoutProductInput | Prisma.ProductVariantUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ProductVariantScalarWhereInput | Prisma.ProductVariantScalarWhereInput[];
};
export type ProductVariantCreateNestedOneWithoutCartItemsInput = {
    create?: Prisma.XOR<Prisma.ProductVariantCreateWithoutCartItemsInput, Prisma.ProductVariantUncheckedCreateWithoutCartItemsInput>;
    connectOrCreate?: Prisma.ProductVariantCreateOrConnectWithoutCartItemsInput;
    connect?: Prisma.ProductVariantWhereUniqueInput;
};
export type ProductVariantUpdateOneRequiredWithoutCartItemsNestedInput = {
    create?: Prisma.XOR<Prisma.ProductVariantCreateWithoutCartItemsInput, Prisma.ProductVariantUncheckedCreateWithoutCartItemsInput>;
    connectOrCreate?: Prisma.ProductVariantCreateOrConnectWithoutCartItemsInput;
    upsert?: Prisma.ProductVariantUpsertWithoutCartItemsInput;
    connect?: Prisma.ProductVariantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductVariantUpdateToOneWithWhereWithoutCartItemsInput, Prisma.ProductVariantUpdateWithoutCartItemsInput>, Prisma.ProductVariantUncheckedUpdateWithoutCartItemsInput>;
};
export type ProductVariantCreateNestedOneWithoutVendorOrderItemsInput = {
    create?: Prisma.XOR<Prisma.ProductVariantCreateWithoutVendorOrderItemsInput, Prisma.ProductVariantUncheckedCreateWithoutVendorOrderItemsInput>;
    connectOrCreate?: Prisma.ProductVariantCreateOrConnectWithoutVendorOrderItemsInput;
    connect?: Prisma.ProductVariantWhereUniqueInput;
};
export type ProductVariantUpdateOneRequiredWithoutVendorOrderItemsNestedInput = {
    create?: Prisma.XOR<Prisma.ProductVariantCreateWithoutVendorOrderItemsInput, Prisma.ProductVariantUncheckedCreateWithoutVendorOrderItemsInput>;
    connectOrCreate?: Prisma.ProductVariantCreateOrConnectWithoutVendorOrderItemsInput;
    upsert?: Prisma.ProductVariantUpsertWithoutVendorOrderItemsInput;
    connect?: Prisma.ProductVariantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductVariantUpdateToOneWithWhereWithoutVendorOrderItemsInput, Prisma.ProductVariantUpdateWithoutVendorOrderItemsInput>, Prisma.ProductVariantUncheckedUpdateWithoutVendorOrderItemsInput>;
};
export type ProductVariantCreateWithoutProductInput = {
    id?: string;
    sku: string;
    name: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    attributes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cartItems?: Prisma.CartItemCreateNestedManyWithoutProductVariantInput;
    vendorOrderItems?: Prisma.VendorOrderItemCreateNestedManyWithoutProductVariantInput;
};
export type ProductVariantUncheckedCreateWithoutProductInput = {
    id?: string;
    sku: string;
    name: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    attributes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cartItems?: Prisma.CartItemUncheckedCreateNestedManyWithoutProductVariantInput;
    vendorOrderItems?: Prisma.VendorOrderItemUncheckedCreateNestedManyWithoutProductVariantInput;
};
export type ProductVariantCreateOrConnectWithoutProductInput = {
    where: Prisma.ProductVariantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductVariantCreateWithoutProductInput, Prisma.ProductVariantUncheckedCreateWithoutProductInput>;
};
export type ProductVariantCreateManyProductInputEnvelope = {
    data: Prisma.ProductVariantCreateManyProductInput | Prisma.ProductVariantCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type ProductVariantUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.ProductVariantWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductVariantUpdateWithoutProductInput, Prisma.ProductVariantUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.ProductVariantCreateWithoutProductInput, Prisma.ProductVariantUncheckedCreateWithoutProductInput>;
};
export type ProductVariantUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.ProductVariantWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductVariantUpdateWithoutProductInput, Prisma.ProductVariantUncheckedUpdateWithoutProductInput>;
};
export type ProductVariantUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.ProductVariantScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductVariantUpdateManyMutationInput, Prisma.ProductVariantUncheckedUpdateManyWithoutProductInput>;
};
export type ProductVariantScalarWhereInput = {
    AND?: Prisma.ProductVariantScalarWhereInput | Prisma.ProductVariantScalarWhereInput[];
    OR?: Prisma.ProductVariantScalarWhereInput[];
    NOT?: Prisma.ProductVariantScalarWhereInput | Prisma.ProductVariantScalarWhereInput[];
    id?: Prisma.StringFilter<"ProductVariant"> | string;
    productId?: Prisma.StringFilter<"ProductVariant"> | string;
    sku?: Prisma.StringFilter<"ProductVariant"> | string;
    name?: Prisma.StringFilter<"ProductVariant"> | string;
    price?: Prisma.DecimalFilter<"ProductVariant"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFilter<"ProductVariant"> | number;
    attributes?: Prisma.JsonFilter<"ProductVariant">;
    isActive?: Prisma.BoolFilter<"ProductVariant"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ProductVariant"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ProductVariant"> | Date | string;
};
export type ProductVariantCreateWithoutCartItemsInput = {
    id?: string;
    sku: string;
    name: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    attributes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutVariantsInput;
    vendorOrderItems?: Prisma.VendorOrderItemCreateNestedManyWithoutProductVariantInput;
};
export type ProductVariantUncheckedCreateWithoutCartItemsInput = {
    id?: string;
    productId: string;
    sku: string;
    name: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    attributes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    vendorOrderItems?: Prisma.VendorOrderItemUncheckedCreateNestedManyWithoutProductVariantInput;
};
export type ProductVariantCreateOrConnectWithoutCartItemsInput = {
    where: Prisma.ProductVariantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductVariantCreateWithoutCartItemsInput, Prisma.ProductVariantUncheckedCreateWithoutCartItemsInput>;
};
export type ProductVariantUpsertWithoutCartItemsInput = {
    update: Prisma.XOR<Prisma.ProductVariantUpdateWithoutCartItemsInput, Prisma.ProductVariantUncheckedUpdateWithoutCartItemsInput>;
    create: Prisma.XOR<Prisma.ProductVariantCreateWithoutCartItemsInput, Prisma.ProductVariantUncheckedCreateWithoutCartItemsInput>;
    where?: Prisma.ProductVariantWhereInput;
};
export type ProductVariantUpdateToOneWithWhereWithoutCartItemsInput = {
    where?: Prisma.ProductVariantWhereInput;
    data: Prisma.XOR<Prisma.ProductVariantUpdateWithoutCartItemsInput, Prisma.ProductVariantUncheckedUpdateWithoutCartItemsInput>;
};
export type ProductVariantUpdateWithoutCartItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutVariantsNestedInput;
    vendorOrderItems?: Prisma.VendorOrderItemUpdateManyWithoutProductVariantNestedInput;
};
export type ProductVariantUncheckedUpdateWithoutCartItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vendorOrderItems?: Prisma.VendorOrderItemUncheckedUpdateManyWithoutProductVariantNestedInput;
};
export type ProductVariantCreateWithoutVendorOrderItemsInput = {
    id?: string;
    sku: string;
    name: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    attributes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cartItems?: Prisma.CartItemCreateNestedManyWithoutProductVariantInput;
    product: Prisma.ProductCreateNestedOneWithoutVariantsInput;
};
export type ProductVariantUncheckedCreateWithoutVendorOrderItemsInput = {
    id?: string;
    productId: string;
    sku: string;
    name: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    attributes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cartItems?: Prisma.CartItemUncheckedCreateNestedManyWithoutProductVariantInput;
};
export type ProductVariantCreateOrConnectWithoutVendorOrderItemsInput = {
    where: Prisma.ProductVariantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductVariantCreateWithoutVendorOrderItemsInput, Prisma.ProductVariantUncheckedCreateWithoutVendorOrderItemsInput>;
};
export type ProductVariantUpsertWithoutVendorOrderItemsInput = {
    update: Prisma.XOR<Prisma.ProductVariantUpdateWithoutVendorOrderItemsInput, Prisma.ProductVariantUncheckedUpdateWithoutVendorOrderItemsInput>;
    create: Prisma.XOR<Prisma.ProductVariantCreateWithoutVendorOrderItemsInput, Prisma.ProductVariantUncheckedCreateWithoutVendorOrderItemsInput>;
    where?: Prisma.ProductVariantWhereInput;
};
export type ProductVariantUpdateToOneWithWhereWithoutVendorOrderItemsInput = {
    where?: Prisma.ProductVariantWhereInput;
    data: Prisma.XOR<Prisma.ProductVariantUpdateWithoutVendorOrderItemsInput, Prisma.ProductVariantUncheckedUpdateWithoutVendorOrderItemsInput>;
};
export type ProductVariantUpdateWithoutVendorOrderItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cartItems?: Prisma.CartItemUpdateManyWithoutProductVariantNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutVariantsNestedInput;
};
export type ProductVariantUncheckedUpdateWithoutVendorOrderItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cartItems?: Prisma.CartItemUncheckedUpdateManyWithoutProductVariantNestedInput;
};
export type ProductVariantCreateManyProductInput = {
    id?: string;
    sku: string;
    name: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: number;
    attributes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductVariantUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cartItems?: Prisma.CartItemUpdateManyWithoutProductVariantNestedInput;
    vendorOrderItems?: Prisma.VendorOrderItemUpdateManyWithoutProductVariantNestedInput;
};
export type ProductVariantUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cartItems?: Prisma.CartItemUncheckedUpdateManyWithoutProductVariantNestedInput;
    vendorOrderItems?: Prisma.VendorOrderItemUncheckedUpdateManyWithoutProductVariantNestedInput;
};
export type ProductVariantUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    attributes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductVariantCountOutputType = {
    cartItems: number;
    vendorOrderItems: number;
};
export type ProductVariantCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cartItems?: boolean | ProductVariantCountOutputTypeCountCartItemsArgs;
    vendorOrderItems?: boolean | ProductVariantCountOutputTypeCountVendorOrderItemsArgs;
};
export type ProductVariantCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantCountOutputTypeSelect<ExtArgs> | null;
};
export type ProductVariantCountOutputTypeCountCartItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CartItemWhereInput;
};
export type ProductVariantCountOutputTypeCountVendorOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VendorOrderItemWhereInput;
};
export type ProductVariantSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    sku?: boolean;
    name?: boolean;
    price?: boolean;
    stock?: boolean;
    attributes?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cartItems?: boolean | Prisma.ProductVariant$cartItemsArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    vendorOrderItems?: boolean | Prisma.ProductVariant$vendorOrderItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductVariantCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productVariant"]>;
export type ProductVariantSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    sku?: boolean;
    name?: boolean;
    price?: boolean;
    stock?: boolean;
    attributes?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productVariant"]>;
export type ProductVariantSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    sku?: boolean;
    name?: boolean;
    price?: boolean;
    stock?: boolean;
    attributes?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productVariant"]>;
export type ProductVariantSelectScalar = {
    id?: boolean;
    productId?: boolean;
    sku?: boolean;
    name?: boolean;
    price?: boolean;
    stock?: boolean;
    attributes?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProductVariantOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productId" | "sku" | "name" | "price" | "stock" | "attributes" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["productVariant"]>;
export type ProductVariantInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cartItems?: boolean | Prisma.ProductVariant$cartItemsArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    vendorOrderItems?: boolean | Prisma.ProductVariant$vendorOrderItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductVariantCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProductVariantIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type ProductVariantIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type $ProductVariantPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProductVariant";
    objects: {
        cartItems: Prisma.$CartItemPayload<ExtArgs>[];
        product: Prisma.$ProductPayload<ExtArgs>;
        vendorOrderItems: Prisma.$VendorOrderItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        productId: string;
        sku: string;
        name: string;
        price: runtime.Decimal;
        stock: number;
        attributes: runtime.JsonValue;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["productVariant"]>;
    composites: {};
};
export type ProductVariantGetPayload<S extends boolean | null | undefined | ProductVariantDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload, S>;
export type ProductVariantCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductVariantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductVariantCountAggregateInputType | true;
};
export interface ProductVariantDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProductVariant'];
        meta: {
            name: 'ProductVariant';
        };
    };
    findUnique<T extends ProductVariantFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductVariantFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductVariantFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductVariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductVariantFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductVariantFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductVariantFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductVariantFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductVariantFindManyArgs>(args?: Prisma.SelectSubset<T, ProductVariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductVariantCreateArgs>(args: Prisma.SelectSubset<T, ProductVariantCreateArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductVariantCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductVariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductVariantCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductVariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductVariantDeleteArgs>(args: Prisma.SelectSubset<T, ProductVariantDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductVariantUpdateArgs>(args: Prisma.SelectSubset<T, ProductVariantUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductVariantDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductVariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductVariantUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductVariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductVariantUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductVariantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductVariantUpsertArgs>(args: Prisma.SelectSubset<T, ProductVariantUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductVariantCountArgs>(args?: Prisma.Subset<T, ProductVariantCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductVariantCountAggregateOutputType> : number>;
    aggregate<T extends ProductVariantAggregateArgs>(args: Prisma.Subset<T, ProductVariantAggregateArgs>): Prisma.PrismaPromise<GetProductVariantAggregateType<T>>;
    groupBy<T extends ProductVariantGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductVariantGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductVariantGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductVariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductVariantFieldRefs;
}
export interface Prisma__ProductVariantClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cartItems<T extends Prisma.ProductVariant$cartItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductVariant$cartItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    vendorOrderItems<T extends Prisma.ProductVariant$vendorOrderItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductVariant$vendorOrderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VendorOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductVariantFieldRefs {
    readonly id: Prisma.FieldRef<"ProductVariant", 'String'>;
    readonly productId: Prisma.FieldRef<"ProductVariant", 'String'>;
    readonly sku: Prisma.FieldRef<"ProductVariant", 'String'>;
    readonly name: Prisma.FieldRef<"ProductVariant", 'String'>;
    readonly price: Prisma.FieldRef<"ProductVariant", 'Decimal'>;
    readonly stock: Prisma.FieldRef<"ProductVariant", 'Int'>;
    readonly attributes: Prisma.FieldRef<"ProductVariant", 'Json'>;
    readonly isActive: Prisma.FieldRef<"ProductVariant", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"ProductVariant", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ProductVariant", 'DateTime'>;
}
export type ProductVariantFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
    where: Prisma.ProductVariantWhereUniqueInput;
};
export type ProductVariantFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
    where: Prisma.ProductVariantWhereUniqueInput;
};
export type ProductVariantFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
    where?: Prisma.ProductVariantWhereInput;
    orderBy?: Prisma.ProductVariantOrderByWithRelationInput | Prisma.ProductVariantOrderByWithRelationInput[];
    cursor?: Prisma.ProductVariantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductVariantScalarFieldEnum | Prisma.ProductVariantScalarFieldEnum[];
};
export type ProductVariantFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
    where?: Prisma.ProductVariantWhereInput;
    orderBy?: Prisma.ProductVariantOrderByWithRelationInput | Prisma.ProductVariantOrderByWithRelationInput[];
    cursor?: Prisma.ProductVariantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductVariantScalarFieldEnum | Prisma.ProductVariantScalarFieldEnum[];
};
export type ProductVariantFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
    where?: Prisma.ProductVariantWhereInput;
    orderBy?: Prisma.ProductVariantOrderByWithRelationInput | Prisma.ProductVariantOrderByWithRelationInput[];
    cursor?: Prisma.ProductVariantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductVariantScalarFieldEnum | Prisma.ProductVariantScalarFieldEnum[];
};
export type ProductVariantCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductVariantCreateInput, Prisma.ProductVariantUncheckedCreateInput>;
};
export type ProductVariantCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductVariantCreateManyInput | Prisma.ProductVariantCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductVariantCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    data: Prisma.ProductVariantCreateManyInput | Prisma.ProductVariantCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProductVariantIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProductVariantUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductVariantUpdateInput, Prisma.ProductVariantUncheckedUpdateInput>;
    where: Prisma.ProductVariantWhereUniqueInput;
};
export type ProductVariantUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductVariantUpdateManyMutationInput, Prisma.ProductVariantUncheckedUpdateManyInput>;
    where?: Prisma.ProductVariantWhereInput;
    limit?: number;
};
export type ProductVariantUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductVariantUpdateManyMutationInput, Prisma.ProductVariantUncheckedUpdateManyInput>;
    where?: Prisma.ProductVariantWhereInput;
    limit?: number;
    include?: Prisma.ProductVariantIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProductVariantUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
    where: Prisma.ProductVariantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductVariantCreateInput, Prisma.ProductVariantUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductVariantUpdateInput, Prisma.ProductVariantUncheckedUpdateInput>;
};
export type ProductVariantDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
    where: Prisma.ProductVariantWhereUniqueInput;
};
export type ProductVariantDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductVariantWhereInput;
    limit?: number;
};
export type ProductVariant$cartItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartItemSelect<ExtArgs> | null;
    omit?: Prisma.CartItemOmit<ExtArgs> | null;
    include?: Prisma.CartItemInclude<ExtArgs> | null;
    where?: Prisma.CartItemWhereInput;
    orderBy?: Prisma.CartItemOrderByWithRelationInput | Prisma.CartItemOrderByWithRelationInput[];
    cursor?: Prisma.CartItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CartItemScalarFieldEnum | Prisma.CartItemScalarFieldEnum[];
};
export type ProductVariant$vendorOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorOrderItemSelect<ExtArgs> | null;
    omit?: Prisma.VendorOrderItemOmit<ExtArgs> | null;
    include?: Prisma.VendorOrderItemInclude<ExtArgs> | null;
    where?: Prisma.VendorOrderItemWhereInput;
    orderBy?: Prisma.VendorOrderItemOrderByWithRelationInput | Prisma.VendorOrderItemOrderByWithRelationInput[];
    cursor?: Prisma.VendorOrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VendorOrderItemScalarFieldEnum | Prisma.VendorOrderItemScalarFieldEnum[];
};
export type ProductVariantDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductVariantSelect<ExtArgs> | null;
    omit?: Prisma.ProductVariantOmit<ExtArgs> | null;
    include?: Prisma.ProductVariantInclude<ExtArgs> | null;
};
