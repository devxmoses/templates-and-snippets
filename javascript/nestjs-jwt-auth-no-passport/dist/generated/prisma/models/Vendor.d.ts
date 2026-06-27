import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type VendorModel = runtime.Types.Result.DefaultSelection<Prisma.$VendorPayload>;
export type AggregateVendor = {
    _count: VendorCountAggregateOutputType | null;
    _avg: VendorAvgAggregateOutputType | null;
    _sum: VendorSumAggregateOutputType | null;
    _min: VendorMinAggregateOutputType | null;
    _max: VendorMaxAggregateOutputType | null;
};
export type VendorAvgAggregateOutputType = {
    commissionRate: runtime.Decimal | null;
};
export type VendorSumAggregateOutputType = {
    commissionRate: runtime.Decimal | null;
};
export type VendorMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    storeName: string | null;
    storeSlug: string | null;
    description: string | null;
    logoUrl: string | null;
    bannerUrl: string | null;
    status: $Enums.VendorStatus | null;
    commissionRate: runtime.Decimal | null;
    stripeAccountId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VendorMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    storeName: string | null;
    storeSlug: string | null;
    description: string | null;
    logoUrl: string | null;
    bannerUrl: string | null;
    status: $Enums.VendorStatus | null;
    commissionRate: runtime.Decimal | null;
    stripeAccountId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VendorCountAggregateOutputType = {
    id: number;
    userId: number;
    storeName: number;
    storeSlug: number;
    description: number;
    logoUrl: number;
    bannerUrl: number;
    status: number;
    commissionRate: number;
    stripeAccountId: number;
    metadata: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type VendorAvgAggregateInputType = {
    commissionRate?: true;
};
export type VendorSumAggregateInputType = {
    commissionRate?: true;
};
export type VendorMinAggregateInputType = {
    id?: true;
    userId?: true;
    storeName?: true;
    storeSlug?: true;
    description?: true;
    logoUrl?: true;
    bannerUrl?: true;
    status?: true;
    commissionRate?: true;
    stripeAccountId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VendorMaxAggregateInputType = {
    id?: true;
    userId?: true;
    storeName?: true;
    storeSlug?: true;
    description?: true;
    logoUrl?: true;
    bannerUrl?: true;
    status?: true;
    commissionRate?: true;
    stripeAccountId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VendorCountAggregateInputType = {
    id?: true;
    userId?: true;
    storeName?: true;
    storeSlug?: true;
    description?: true;
    logoUrl?: true;
    bannerUrl?: true;
    status?: true;
    commissionRate?: true;
    stripeAccountId?: true;
    metadata?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type VendorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VendorWhereInput;
    orderBy?: Prisma.VendorOrderByWithRelationInput | Prisma.VendorOrderByWithRelationInput[];
    cursor?: Prisma.VendorWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VendorCountAggregateInputType;
    _avg?: VendorAvgAggregateInputType;
    _sum?: VendorSumAggregateInputType;
    _min?: VendorMinAggregateInputType;
    _max?: VendorMaxAggregateInputType;
};
export type GetVendorAggregateType<T extends VendorAggregateArgs> = {
    [P in keyof T & keyof AggregateVendor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVendor[P]> : Prisma.GetScalarType<T[P], AggregateVendor[P]>;
};
export type VendorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VendorWhereInput;
    orderBy?: Prisma.VendorOrderByWithAggregationInput | Prisma.VendorOrderByWithAggregationInput[];
    by: Prisma.VendorScalarFieldEnum[] | Prisma.VendorScalarFieldEnum;
    having?: Prisma.VendorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VendorCountAggregateInputType | true;
    _avg?: VendorAvgAggregateInputType;
    _sum?: VendorSumAggregateInputType;
    _min?: VendorMinAggregateInputType;
    _max?: VendorMaxAggregateInputType;
};
export type VendorGroupByOutputType = {
    id: string;
    userId: string;
    storeName: string;
    storeSlug: string;
    description: string | null;
    logoUrl: string | null;
    bannerUrl: string | null;
    status: $Enums.VendorStatus;
    commissionRate: runtime.Decimal;
    stripeAccountId: string | null;
    metadata: runtime.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    _count: VendorCountAggregateOutputType | null;
    _avg: VendorAvgAggregateOutputType | null;
    _sum: VendorSumAggregateOutputType | null;
    _min: VendorMinAggregateOutputType | null;
    _max: VendorMaxAggregateOutputType | null;
};
export type GetVendorGroupByPayload<T extends VendorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VendorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VendorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VendorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VendorGroupByOutputType[P]>;
}>>;
export type VendorWhereInput = {
    AND?: Prisma.VendorWhereInput | Prisma.VendorWhereInput[];
    OR?: Prisma.VendorWhereInput[];
    NOT?: Prisma.VendorWhereInput | Prisma.VendorWhereInput[];
    id?: Prisma.StringFilter<"Vendor"> | string;
    userId?: Prisma.StringFilter<"Vendor"> | string;
    storeName?: Prisma.StringFilter<"Vendor"> | string;
    storeSlug?: Prisma.StringFilter<"Vendor"> | string;
    description?: Prisma.StringNullableFilter<"Vendor"> | string | null;
    logoUrl?: Prisma.StringNullableFilter<"Vendor"> | string | null;
    bannerUrl?: Prisma.StringNullableFilter<"Vendor"> | string | null;
    status?: Prisma.EnumVendorStatusFilter<"Vendor"> | $Enums.VendorStatus;
    commissionRate?: Prisma.DecimalFilter<"Vendor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stripeAccountId?: Prisma.StringNullableFilter<"Vendor"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"Vendor">;
    createdAt?: Prisma.DateTimeFilter<"Vendor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Vendor"> | Date | string;
    payouts?: Prisma.PayoutListRelationFilter;
    products?: Prisma.ProductListRelationFilter;
    vendorOrders?: Prisma.VendorOrderListRelationFilter;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type VendorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    storeName?: Prisma.SortOrder;
    storeSlug?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    logoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    bannerUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    commissionRate?: Prisma.SortOrder;
    stripeAccountId?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    payouts?: Prisma.PayoutOrderByRelationAggregateInput;
    products?: Prisma.ProductOrderByRelationAggregateInput;
    vendorOrders?: Prisma.VendorOrderOrderByRelationAggregateInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type VendorWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    storeSlug?: string;
    AND?: Prisma.VendorWhereInput | Prisma.VendorWhereInput[];
    OR?: Prisma.VendorWhereInput[];
    NOT?: Prisma.VendorWhereInput | Prisma.VendorWhereInput[];
    storeName?: Prisma.StringFilter<"Vendor"> | string;
    description?: Prisma.StringNullableFilter<"Vendor"> | string | null;
    logoUrl?: Prisma.StringNullableFilter<"Vendor"> | string | null;
    bannerUrl?: Prisma.StringNullableFilter<"Vendor"> | string | null;
    status?: Prisma.EnumVendorStatusFilter<"Vendor"> | $Enums.VendorStatus;
    commissionRate?: Prisma.DecimalFilter<"Vendor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stripeAccountId?: Prisma.StringNullableFilter<"Vendor"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"Vendor">;
    createdAt?: Prisma.DateTimeFilter<"Vendor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Vendor"> | Date | string;
    payouts?: Prisma.PayoutListRelationFilter;
    products?: Prisma.ProductListRelationFilter;
    vendorOrders?: Prisma.VendorOrderListRelationFilter;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId" | "storeSlug">;
export type VendorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    storeName?: Prisma.SortOrder;
    storeSlug?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    logoUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    bannerUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    commissionRate?: Prisma.SortOrder;
    stripeAccountId?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.VendorCountOrderByAggregateInput;
    _avg?: Prisma.VendorAvgOrderByAggregateInput;
    _max?: Prisma.VendorMaxOrderByAggregateInput;
    _min?: Prisma.VendorMinOrderByAggregateInput;
    _sum?: Prisma.VendorSumOrderByAggregateInput;
};
export type VendorScalarWhereWithAggregatesInput = {
    AND?: Prisma.VendorScalarWhereWithAggregatesInput | Prisma.VendorScalarWhereWithAggregatesInput[];
    OR?: Prisma.VendorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VendorScalarWhereWithAggregatesInput | Prisma.VendorScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Vendor"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Vendor"> | string;
    storeName?: Prisma.StringWithAggregatesFilter<"Vendor"> | string;
    storeSlug?: Prisma.StringWithAggregatesFilter<"Vendor"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Vendor"> | string | null;
    logoUrl?: Prisma.StringNullableWithAggregatesFilter<"Vendor"> | string | null;
    bannerUrl?: Prisma.StringNullableWithAggregatesFilter<"Vendor"> | string | null;
    status?: Prisma.EnumVendorStatusWithAggregatesFilter<"Vendor"> | $Enums.VendorStatus;
    commissionRate?: Prisma.DecimalWithAggregatesFilter<"Vendor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stripeAccountId?: Prisma.StringNullableWithAggregatesFilter<"Vendor"> | string | null;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"Vendor">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Vendor"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Vendor"> | Date | string;
};
export type VendorCreateInput = {
    id?: string;
    storeName: string;
    storeSlug: string;
    description?: string | null;
    logoUrl?: string | null;
    bannerUrl?: string | null;
    status?: $Enums.VendorStatus;
    commissionRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stripeAccountId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payouts?: Prisma.PayoutCreateNestedManyWithoutVendorInput;
    products?: Prisma.ProductCreateNestedManyWithoutVendorInput;
    vendorOrders?: Prisma.VendorOrderCreateNestedManyWithoutVendorInput;
    user: Prisma.UserCreateNestedOneWithoutVendorInput;
};
export type VendorUncheckedCreateInput = {
    id?: string;
    userId: string;
    storeName: string;
    storeSlug: string;
    description?: string | null;
    logoUrl?: string | null;
    bannerUrl?: string | null;
    status?: $Enums.VendorStatus;
    commissionRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stripeAccountId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutVendorInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutVendorInput;
    vendorOrders?: Prisma.VendorOrderUncheckedCreateNestedManyWithoutVendorInput;
};
export type VendorUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storeName?: Prisma.StringFieldUpdateOperationsInput | string;
    storeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bannerUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus;
    commissionRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payouts?: Prisma.PayoutUpdateManyWithoutVendorNestedInput;
    products?: Prisma.ProductUpdateManyWithoutVendorNestedInput;
    vendorOrders?: Prisma.VendorOrderUpdateManyWithoutVendorNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutVendorNestedInput;
};
export type VendorUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    storeName?: Prisma.StringFieldUpdateOperationsInput | string;
    storeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bannerUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus;
    commissionRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutVendorNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutVendorNestedInput;
    vendorOrders?: Prisma.VendorOrderUncheckedUpdateManyWithoutVendorNestedInput;
};
export type VendorCreateManyInput = {
    id?: string;
    userId: string;
    storeName: string;
    storeSlug: string;
    description?: string | null;
    logoUrl?: string | null;
    bannerUrl?: string | null;
    status?: $Enums.VendorStatus;
    commissionRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stripeAccountId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VendorUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storeName?: Prisma.StringFieldUpdateOperationsInput | string;
    storeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bannerUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus;
    commissionRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VendorUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    storeName?: Prisma.StringFieldUpdateOperationsInput | string;
    storeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bannerUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus;
    commissionRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VendorNullableScalarRelationFilter = {
    is?: Prisma.VendorWhereInput | null;
    isNot?: Prisma.VendorWhereInput | null;
};
export type VendorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    storeName?: Prisma.SortOrder;
    storeSlug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrder;
    bannerUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    commissionRate?: Prisma.SortOrder;
    stripeAccountId?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VendorAvgOrderByAggregateInput = {
    commissionRate?: Prisma.SortOrder;
};
export type VendorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    storeName?: Prisma.SortOrder;
    storeSlug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrder;
    bannerUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    commissionRate?: Prisma.SortOrder;
    stripeAccountId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VendorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    storeName?: Prisma.SortOrder;
    storeSlug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    logoUrl?: Prisma.SortOrder;
    bannerUrl?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    commissionRate?: Prisma.SortOrder;
    stripeAccountId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VendorSumOrderByAggregateInput = {
    commissionRate?: Prisma.SortOrder;
};
export type VendorScalarRelationFilter = {
    is?: Prisma.VendorWhereInput;
    isNot?: Prisma.VendorWhereInput;
};
export type VendorCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutUserInput, Prisma.VendorUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutUserInput;
    connect?: Prisma.VendorWhereUniqueInput;
};
export type VendorUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutUserInput, Prisma.VendorUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutUserInput;
    connect?: Prisma.VendorWhereUniqueInput;
};
export type VendorUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutUserInput, Prisma.VendorUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutUserInput;
    upsert?: Prisma.VendorUpsertWithoutUserInput;
    disconnect?: Prisma.VendorWhereInput | boolean;
    delete?: Prisma.VendorWhereInput | boolean;
    connect?: Prisma.VendorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VendorUpdateToOneWithWhereWithoutUserInput, Prisma.VendorUpdateWithoutUserInput>, Prisma.VendorUncheckedUpdateWithoutUserInput>;
};
export type VendorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutUserInput, Prisma.VendorUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutUserInput;
    upsert?: Prisma.VendorUpsertWithoutUserInput;
    disconnect?: Prisma.VendorWhereInput | boolean;
    delete?: Prisma.VendorWhereInput | boolean;
    connect?: Prisma.VendorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VendorUpdateToOneWithWhereWithoutUserInput, Prisma.VendorUpdateWithoutUserInput>, Prisma.VendorUncheckedUpdateWithoutUserInput>;
};
export type EnumVendorStatusFieldUpdateOperationsInput = {
    set?: $Enums.VendorStatus;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type VendorCreateNestedOneWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutProductsInput, Prisma.VendorUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutProductsInput;
    connect?: Prisma.VendorWhereUniqueInput;
};
export type VendorUpdateOneRequiredWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutProductsInput, Prisma.VendorUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutProductsInput;
    upsert?: Prisma.VendorUpsertWithoutProductsInput;
    connect?: Prisma.VendorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VendorUpdateToOneWithWhereWithoutProductsInput, Prisma.VendorUpdateWithoutProductsInput>, Prisma.VendorUncheckedUpdateWithoutProductsInput>;
};
export type VendorCreateNestedOneWithoutVendorOrdersInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutVendorOrdersInput, Prisma.VendorUncheckedCreateWithoutVendorOrdersInput>;
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutVendorOrdersInput;
    connect?: Prisma.VendorWhereUniqueInput;
};
export type VendorUpdateOneRequiredWithoutVendorOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutVendorOrdersInput, Prisma.VendorUncheckedCreateWithoutVendorOrdersInput>;
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutVendorOrdersInput;
    upsert?: Prisma.VendorUpsertWithoutVendorOrdersInput;
    connect?: Prisma.VendorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VendorUpdateToOneWithWhereWithoutVendorOrdersInput, Prisma.VendorUpdateWithoutVendorOrdersInput>, Prisma.VendorUncheckedUpdateWithoutVendorOrdersInput>;
};
export type VendorCreateNestedOneWithoutPayoutsInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutPayoutsInput, Prisma.VendorUncheckedCreateWithoutPayoutsInput>;
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutPayoutsInput;
    connect?: Prisma.VendorWhereUniqueInput;
};
export type VendorUpdateOneRequiredWithoutPayoutsNestedInput = {
    create?: Prisma.XOR<Prisma.VendorCreateWithoutPayoutsInput, Prisma.VendorUncheckedCreateWithoutPayoutsInput>;
    connectOrCreate?: Prisma.VendorCreateOrConnectWithoutPayoutsInput;
    upsert?: Prisma.VendorUpsertWithoutPayoutsInput;
    connect?: Prisma.VendorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VendorUpdateToOneWithWhereWithoutPayoutsInput, Prisma.VendorUpdateWithoutPayoutsInput>, Prisma.VendorUncheckedUpdateWithoutPayoutsInput>;
};
export type VendorCreateWithoutUserInput = {
    id?: string;
    storeName: string;
    storeSlug: string;
    description?: string | null;
    logoUrl?: string | null;
    bannerUrl?: string | null;
    status?: $Enums.VendorStatus;
    commissionRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stripeAccountId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payouts?: Prisma.PayoutCreateNestedManyWithoutVendorInput;
    products?: Prisma.ProductCreateNestedManyWithoutVendorInput;
    vendorOrders?: Prisma.VendorOrderCreateNestedManyWithoutVendorInput;
};
export type VendorUncheckedCreateWithoutUserInput = {
    id?: string;
    storeName: string;
    storeSlug: string;
    description?: string | null;
    logoUrl?: string | null;
    bannerUrl?: string | null;
    status?: $Enums.VendorStatus;
    commissionRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stripeAccountId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutVendorInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutVendorInput;
    vendorOrders?: Prisma.VendorOrderUncheckedCreateNestedManyWithoutVendorInput;
};
export type VendorCreateOrConnectWithoutUserInput = {
    where: Prisma.VendorWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorCreateWithoutUserInput, Prisma.VendorUncheckedCreateWithoutUserInput>;
};
export type VendorUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.VendorUpdateWithoutUserInput, Prisma.VendorUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.VendorCreateWithoutUserInput, Prisma.VendorUncheckedCreateWithoutUserInput>;
    where?: Prisma.VendorWhereInput;
};
export type VendorUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.VendorWhereInput;
    data: Prisma.XOR<Prisma.VendorUpdateWithoutUserInput, Prisma.VendorUncheckedUpdateWithoutUserInput>;
};
export type VendorUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storeName?: Prisma.StringFieldUpdateOperationsInput | string;
    storeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bannerUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus;
    commissionRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payouts?: Prisma.PayoutUpdateManyWithoutVendorNestedInput;
    products?: Prisma.ProductUpdateManyWithoutVendorNestedInput;
    vendorOrders?: Prisma.VendorOrderUpdateManyWithoutVendorNestedInput;
};
export type VendorUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storeName?: Prisma.StringFieldUpdateOperationsInput | string;
    storeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bannerUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus;
    commissionRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutVendorNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutVendorNestedInput;
    vendorOrders?: Prisma.VendorOrderUncheckedUpdateManyWithoutVendorNestedInput;
};
export type VendorCreateWithoutProductsInput = {
    id?: string;
    storeName: string;
    storeSlug: string;
    description?: string | null;
    logoUrl?: string | null;
    bannerUrl?: string | null;
    status?: $Enums.VendorStatus;
    commissionRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stripeAccountId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payouts?: Prisma.PayoutCreateNestedManyWithoutVendorInput;
    vendorOrders?: Prisma.VendorOrderCreateNestedManyWithoutVendorInput;
    user: Prisma.UserCreateNestedOneWithoutVendorInput;
};
export type VendorUncheckedCreateWithoutProductsInput = {
    id?: string;
    userId: string;
    storeName: string;
    storeSlug: string;
    description?: string | null;
    logoUrl?: string | null;
    bannerUrl?: string | null;
    status?: $Enums.VendorStatus;
    commissionRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stripeAccountId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutVendorInput;
    vendorOrders?: Prisma.VendorOrderUncheckedCreateNestedManyWithoutVendorInput;
};
export type VendorCreateOrConnectWithoutProductsInput = {
    where: Prisma.VendorWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorCreateWithoutProductsInput, Prisma.VendorUncheckedCreateWithoutProductsInput>;
};
export type VendorUpsertWithoutProductsInput = {
    update: Prisma.XOR<Prisma.VendorUpdateWithoutProductsInput, Prisma.VendorUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.VendorCreateWithoutProductsInput, Prisma.VendorUncheckedCreateWithoutProductsInput>;
    where?: Prisma.VendorWhereInput;
};
export type VendorUpdateToOneWithWhereWithoutProductsInput = {
    where?: Prisma.VendorWhereInput;
    data: Prisma.XOR<Prisma.VendorUpdateWithoutProductsInput, Prisma.VendorUncheckedUpdateWithoutProductsInput>;
};
export type VendorUpdateWithoutProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storeName?: Prisma.StringFieldUpdateOperationsInput | string;
    storeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bannerUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus;
    commissionRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payouts?: Prisma.PayoutUpdateManyWithoutVendorNestedInput;
    vendorOrders?: Prisma.VendorOrderUpdateManyWithoutVendorNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutVendorNestedInput;
};
export type VendorUncheckedUpdateWithoutProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    storeName?: Prisma.StringFieldUpdateOperationsInput | string;
    storeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bannerUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus;
    commissionRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutVendorNestedInput;
    vendorOrders?: Prisma.VendorOrderUncheckedUpdateManyWithoutVendorNestedInput;
};
export type VendorCreateWithoutVendorOrdersInput = {
    id?: string;
    storeName: string;
    storeSlug: string;
    description?: string | null;
    logoUrl?: string | null;
    bannerUrl?: string | null;
    status?: $Enums.VendorStatus;
    commissionRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stripeAccountId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payouts?: Prisma.PayoutCreateNestedManyWithoutVendorInput;
    products?: Prisma.ProductCreateNestedManyWithoutVendorInput;
    user: Prisma.UserCreateNestedOneWithoutVendorInput;
};
export type VendorUncheckedCreateWithoutVendorOrdersInput = {
    id?: string;
    userId: string;
    storeName: string;
    storeSlug: string;
    description?: string | null;
    logoUrl?: string | null;
    bannerUrl?: string | null;
    status?: $Enums.VendorStatus;
    commissionRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stripeAccountId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payouts?: Prisma.PayoutUncheckedCreateNestedManyWithoutVendorInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutVendorInput;
};
export type VendorCreateOrConnectWithoutVendorOrdersInput = {
    where: Prisma.VendorWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorCreateWithoutVendorOrdersInput, Prisma.VendorUncheckedCreateWithoutVendorOrdersInput>;
};
export type VendorUpsertWithoutVendorOrdersInput = {
    update: Prisma.XOR<Prisma.VendorUpdateWithoutVendorOrdersInput, Prisma.VendorUncheckedUpdateWithoutVendorOrdersInput>;
    create: Prisma.XOR<Prisma.VendorCreateWithoutVendorOrdersInput, Prisma.VendorUncheckedCreateWithoutVendorOrdersInput>;
    where?: Prisma.VendorWhereInput;
};
export type VendorUpdateToOneWithWhereWithoutVendorOrdersInput = {
    where?: Prisma.VendorWhereInput;
    data: Prisma.XOR<Prisma.VendorUpdateWithoutVendorOrdersInput, Prisma.VendorUncheckedUpdateWithoutVendorOrdersInput>;
};
export type VendorUpdateWithoutVendorOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storeName?: Prisma.StringFieldUpdateOperationsInput | string;
    storeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bannerUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus;
    commissionRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payouts?: Prisma.PayoutUpdateManyWithoutVendorNestedInput;
    products?: Prisma.ProductUpdateManyWithoutVendorNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutVendorNestedInput;
};
export type VendorUncheckedUpdateWithoutVendorOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    storeName?: Prisma.StringFieldUpdateOperationsInput | string;
    storeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bannerUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus;
    commissionRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payouts?: Prisma.PayoutUncheckedUpdateManyWithoutVendorNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutVendorNestedInput;
};
export type VendorCreateWithoutPayoutsInput = {
    id?: string;
    storeName: string;
    storeSlug: string;
    description?: string | null;
    logoUrl?: string | null;
    bannerUrl?: string | null;
    status?: $Enums.VendorStatus;
    commissionRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stripeAccountId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: Prisma.ProductCreateNestedManyWithoutVendorInput;
    vendorOrders?: Prisma.VendorOrderCreateNestedManyWithoutVendorInput;
    user: Prisma.UserCreateNestedOneWithoutVendorInput;
};
export type VendorUncheckedCreateWithoutPayoutsInput = {
    id?: string;
    userId: string;
    storeName: string;
    storeSlug: string;
    description?: string | null;
    logoUrl?: string | null;
    bannerUrl?: string | null;
    status?: $Enums.VendorStatus;
    commissionRate?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    stripeAccountId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutVendorInput;
    vendorOrders?: Prisma.VendorOrderUncheckedCreateNestedManyWithoutVendorInput;
};
export type VendorCreateOrConnectWithoutPayoutsInput = {
    where: Prisma.VendorWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorCreateWithoutPayoutsInput, Prisma.VendorUncheckedCreateWithoutPayoutsInput>;
};
export type VendorUpsertWithoutPayoutsInput = {
    update: Prisma.XOR<Prisma.VendorUpdateWithoutPayoutsInput, Prisma.VendorUncheckedUpdateWithoutPayoutsInput>;
    create: Prisma.XOR<Prisma.VendorCreateWithoutPayoutsInput, Prisma.VendorUncheckedCreateWithoutPayoutsInput>;
    where?: Prisma.VendorWhereInput;
};
export type VendorUpdateToOneWithWhereWithoutPayoutsInput = {
    where?: Prisma.VendorWhereInput;
    data: Prisma.XOR<Prisma.VendorUpdateWithoutPayoutsInput, Prisma.VendorUncheckedUpdateWithoutPayoutsInput>;
};
export type VendorUpdateWithoutPayoutsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    storeName?: Prisma.StringFieldUpdateOperationsInput | string;
    storeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bannerUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus;
    commissionRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    products?: Prisma.ProductUpdateManyWithoutVendorNestedInput;
    vendorOrders?: Prisma.VendorOrderUpdateManyWithoutVendorNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutVendorNestedInput;
};
export type VendorUncheckedUpdateWithoutPayoutsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    storeName?: Prisma.StringFieldUpdateOperationsInput | string;
    storeSlug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bannerUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumVendorStatusFieldUpdateOperationsInput | $Enums.VendorStatus;
    commissionRate?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    stripeAccountId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    products?: Prisma.ProductUncheckedUpdateManyWithoutVendorNestedInput;
    vendorOrders?: Prisma.VendorOrderUncheckedUpdateManyWithoutVendorNestedInput;
};
export type VendorCountOutputType = {
    payouts: number;
    products: number;
    vendorOrders: number;
};
export type VendorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payouts?: boolean | VendorCountOutputTypeCountPayoutsArgs;
    products?: boolean | VendorCountOutputTypeCountProductsArgs;
    vendorOrders?: boolean | VendorCountOutputTypeCountVendorOrdersArgs;
};
export type VendorCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorCountOutputTypeSelect<ExtArgs> | null;
};
export type VendorCountOutputTypeCountPayoutsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutWhereInput;
};
export type VendorCountOutputTypeCountProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
};
export type VendorCountOutputTypeCountVendorOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VendorOrderWhereInput;
};
export type VendorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    storeName?: boolean;
    storeSlug?: boolean;
    description?: boolean;
    logoUrl?: boolean;
    bannerUrl?: boolean;
    status?: boolean;
    commissionRate?: boolean;
    stripeAccountId?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    payouts?: boolean | Prisma.Vendor$payoutsArgs<ExtArgs>;
    products?: boolean | Prisma.Vendor$productsArgs<ExtArgs>;
    vendorOrders?: boolean | Prisma.Vendor$vendorOrdersArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.VendorCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vendor"]>;
export type VendorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    storeName?: boolean;
    storeSlug?: boolean;
    description?: boolean;
    logoUrl?: boolean;
    bannerUrl?: boolean;
    status?: boolean;
    commissionRate?: boolean;
    stripeAccountId?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vendor"]>;
export type VendorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    storeName?: boolean;
    storeSlug?: boolean;
    description?: boolean;
    logoUrl?: boolean;
    bannerUrl?: boolean;
    status?: boolean;
    commissionRate?: boolean;
    stripeAccountId?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vendor"]>;
export type VendorSelectScalar = {
    id?: boolean;
    userId?: boolean;
    storeName?: boolean;
    storeSlug?: boolean;
    description?: boolean;
    logoUrl?: boolean;
    bannerUrl?: boolean;
    status?: boolean;
    commissionRate?: boolean;
    stripeAccountId?: boolean;
    metadata?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type VendorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "storeName" | "storeSlug" | "description" | "logoUrl" | "bannerUrl" | "status" | "commissionRate" | "stripeAccountId" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["vendor"]>;
export type VendorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payouts?: boolean | Prisma.Vendor$payoutsArgs<ExtArgs>;
    products?: boolean | Prisma.Vendor$productsArgs<ExtArgs>;
    vendorOrders?: boolean | Prisma.Vendor$vendorOrdersArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.VendorCountOutputTypeDefaultArgs<ExtArgs>;
};
export type VendorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type VendorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $VendorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Vendor";
    objects: {
        payouts: Prisma.$PayoutPayload<ExtArgs>[];
        products: Prisma.$ProductPayload<ExtArgs>[];
        vendorOrders: Prisma.$VendorOrderPayload<ExtArgs>[];
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        storeName: string;
        storeSlug: string;
        description: string | null;
        logoUrl: string | null;
        bannerUrl: string | null;
        status: $Enums.VendorStatus;
        commissionRate: runtime.Decimal;
        stripeAccountId: string | null;
        metadata: runtime.JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["vendor"]>;
    composites: {};
};
export type VendorGetPayload<S extends boolean | null | undefined | VendorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VendorPayload, S>;
export type VendorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VendorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VendorCountAggregateInputType | true;
};
export interface VendorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Vendor'];
        meta: {
            name: 'Vendor';
        };
    };
    findUnique<T extends VendorFindUniqueArgs>(args: Prisma.SelectSubset<T, VendorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VendorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VendorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VendorFindFirstArgs>(args?: Prisma.SelectSubset<T, VendorFindFirstArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VendorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VendorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VendorFindManyArgs>(args?: Prisma.SelectSubset<T, VendorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VendorCreateArgs>(args: Prisma.SelectSubset<T, VendorCreateArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VendorCreateManyArgs>(args?: Prisma.SelectSubset<T, VendorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends VendorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VendorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends VendorDeleteArgs>(args: Prisma.SelectSubset<T, VendorDeleteArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VendorUpdateArgs>(args: Prisma.SelectSubset<T, VendorUpdateArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VendorDeleteManyArgs>(args?: Prisma.SelectSubset<T, VendorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VendorUpdateManyArgs>(args: Prisma.SelectSubset<T, VendorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends VendorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VendorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends VendorUpsertArgs>(args: Prisma.SelectSubset<T, VendorUpsertArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VendorCountArgs>(args?: Prisma.Subset<T, VendorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VendorCountAggregateOutputType> : number>;
    aggregate<T extends VendorAggregateArgs>(args: Prisma.Subset<T, VendorAggregateArgs>): Prisma.PrismaPromise<GetVendorAggregateType<T>>;
    groupBy<T extends VendorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VendorGroupByArgs['orderBy'];
    } : {
        orderBy?: VendorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VendorFieldRefs;
}
export interface Prisma__VendorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    payouts<T extends Prisma.Vendor$payoutsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Vendor$payoutsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    products<T extends Prisma.Vendor$productsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Vendor$productsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    vendorOrders<T extends Prisma.Vendor$vendorOrdersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Vendor$vendorOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VendorOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VendorFieldRefs {
    readonly id: Prisma.FieldRef<"Vendor", 'String'>;
    readonly userId: Prisma.FieldRef<"Vendor", 'String'>;
    readonly storeName: Prisma.FieldRef<"Vendor", 'String'>;
    readonly storeSlug: Prisma.FieldRef<"Vendor", 'String'>;
    readonly description: Prisma.FieldRef<"Vendor", 'String'>;
    readonly logoUrl: Prisma.FieldRef<"Vendor", 'String'>;
    readonly bannerUrl: Prisma.FieldRef<"Vendor", 'String'>;
    readonly status: Prisma.FieldRef<"Vendor", 'VendorStatus'>;
    readonly commissionRate: Prisma.FieldRef<"Vendor", 'Decimal'>;
    readonly stripeAccountId: Prisma.FieldRef<"Vendor", 'String'>;
    readonly metadata: Prisma.FieldRef<"Vendor", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"Vendor", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Vendor", 'DateTime'>;
}
export type VendorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    where: Prisma.VendorWhereUniqueInput;
};
export type VendorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    where: Prisma.VendorWhereUniqueInput;
};
export type VendorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    where?: Prisma.VendorWhereInput;
    orderBy?: Prisma.VendorOrderByWithRelationInput | Prisma.VendorOrderByWithRelationInput[];
    cursor?: Prisma.VendorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VendorScalarFieldEnum | Prisma.VendorScalarFieldEnum[];
};
export type VendorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    where?: Prisma.VendorWhereInput;
    orderBy?: Prisma.VendorOrderByWithRelationInput | Prisma.VendorOrderByWithRelationInput[];
    cursor?: Prisma.VendorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VendorScalarFieldEnum | Prisma.VendorScalarFieldEnum[];
};
export type VendorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    where?: Prisma.VendorWhereInput;
    orderBy?: Prisma.VendorOrderByWithRelationInput | Prisma.VendorOrderByWithRelationInput[];
    cursor?: Prisma.VendorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VendorScalarFieldEnum | Prisma.VendorScalarFieldEnum[];
};
export type VendorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VendorCreateInput, Prisma.VendorUncheckedCreateInput>;
};
export type VendorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VendorCreateManyInput | Prisma.VendorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VendorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    data: Prisma.VendorCreateManyInput | Prisma.VendorCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.VendorIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type VendorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VendorUpdateInput, Prisma.VendorUncheckedUpdateInput>;
    where: Prisma.VendorWhereUniqueInput;
};
export type VendorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VendorUpdateManyMutationInput, Prisma.VendorUncheckedUpdateManyInput>;
    where?: Prisma.VendorWhereInput;
    limit?: number;
};
export type VendorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VendorUpdateManyMutationInput, Prisma.VendorUncheckedUpdateManyInput>;
    where?: Prisma.VendorWhereInput;
    limit?: number;
    include?: Prisma.VendorIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type VendorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    where: Prisma.VendorWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorCreateInput, Prisma.VendorUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VendorUpdateInput, Prisma.VendorUncheckedUpdateInput>;
};
export type VendorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
    where: Prisma.VendorWhereUniqueInput;
};
export type VendorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VendorWhereInput;
    limit?: number;
};
export type Vendor$payoutsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    where?: Prisma.PayoutWhereInput;
    orderBy?: Prisma.PayoutOrderByWithRelationInput | Prisma.PayoutOrderByWithRelationInput[];
    cursor?: Prisma.PayoutWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PayoutScalarFieldEnum | Prisma.PayoutScalarFieldEnum[];
};
export type Vendor$productsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type Vendor$vendorOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorOrderSelect<ExtArgs> | null;
    omit?: Prisma.VendorOrderOmit<ExtArgs> | null;
    include?: Prisma.VendorOrderInclude<ExtArgs> | null;
    where?: Prisma.VendorOrderWhereInput;
    orderBy?: Prisma.VendorOrderOrderByWithRelationInput | Prisma.VendorOrderOrderByWithRelationInput[];
    cursor?: Prisma.VendorOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VendorOrderScalarFieldEnum | Prisma.VendorOrderScalarFieldEnum[];
};
export type VendorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorSelect<ExtArgs> | null;
    omit?: Prisma.VendorOmit<ExtArgs> | null;
    include?: Prisma.VendorInclude<ExtArgs> | null;
};
