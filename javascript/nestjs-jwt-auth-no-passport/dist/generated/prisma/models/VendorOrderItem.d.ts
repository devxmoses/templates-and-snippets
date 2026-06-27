import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type VendorOrderItemModel = runtime.Types.Result.DefaultSelection<Prisma.$VendorOrderItemPayload>;
export type AggregateVendorOrderItem = {
    _count: VendorOrderItemCountAggregateOutputType | null;
    _avg: VendorOrderItemAvgAggregateOutputType | null;
    _sum: VendorOrderItemSumAggregateOutputType | null;
    _min: VendorOrderItemMinAggregateOutputType | null;
    _max: VendorOrderItemMaxAggregateOutputType | null;
};
export type VendorOrderItemAvgAggregateOutputType = {
    quantity: number | null;
    unitPrice: runtime.Decimal | null;
    totalPrice: runtime.Decimal | null;
};
export type VendorOrderItemSumAggregateOutputType = {
    quantity: number | null;
    unitPrice: runtime.Decimal | null;
    totalPrice: runtime.Decimal | null;
};
export type VendorOrderItemMinAggregateOutputType = {
    id: string | null;
    vendorOrderId: string | null;
    productVariantId: string | null;
    quantity: number | null;
    unitPrice: runtime.Decimal | null;
    totalPrice: runtime.Decimal | null;
};
export type VendorOrderItemMaxAggregateOutputType = {
    id: string | null;
    vendorOrderId: string | null;
    productVariantId: string | null;
    quantity: number | null;
    unitPrice: runtime.Decimal | null;
    totalPrice: runtime.Decimal | null;
};
export type VendorOrderItemCountAggregateOutputType = {
    id: number;
    vendorOrderId: number;
    productVariantId: number;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    snapshot: number;
    _all: number;
};
export type VendorOrderItemAvgAggregateInputType = {
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
};
export type VendorOrderItemSumAggregateInputType = {
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
};
export type VendorOrderItemMinAggregateInputType = {
    id?: true;
    vendorOrderId?: true;
    productVariantId?: true;
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
};
export type VendorOrderItemMaxAggregateInputType = {
    id?: true;
    vendorOrderId?: true;
    productVariantId?: true;
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
};
export type VendorOrderItemCountAggregateInputType = {
    id?: true;
    vendorOrderId?: true;
    productVariantId?: true;
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
    snapshot?: true;
    _all?: true;
};
export type VendorOrderItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VendorOrderItemWhereInput;
    orderBy?: Prisma.VendorOrderItemOrderByWithRelationInput | Prisma.VendorOrderItemOrderByWithRelationInput[];
    cursor?: Prisma.VendorOrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VendorOrderItemCountAggregateInputType;
    _avg?: VendorOrderItemAvgAggregateInputType;
    _sum?: VendorOrderItemSumAggregateInputType;
    _min?: VendorOrderItemMinAggregateInputType;
    _max?: VendorOrderItemMaxAggregateInputType;
};
export type GetVendorOrderItemAggregateType<T extends VendorOrderItemAggregateArgs> = {
    [P in keyof T & keyof AggregateVendorOrderItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVendorOrderItem[P]> : Prisma.GetScalarType<T[P], AggregateVendorOrderItem[P]>;
};
export type VendorOrderItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VendorOrderItemWhereInput;
    orderBy?: Prisma.VendorOrderItemOrderByWithAggregationInput | Prisma.VendorOrderItemOrderByWithAggregationInput[];
    by: Prisma.VendorOrderItemScalarFieldEnum[] | Prisma.VendorOrderItemScalarFieldEnum;
    having?: Prisma.VendorOrderItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VendorOrderItemCountAggregateInputType | true;
    _avg?: VendorOrderItemAvgAggregateInputType;
    _sum?: VendorOrderItemSumAggregateInputType;
    _min?: VendorOrderItemMinAggregateInputType;
    _max?: VendorOrderItemMaxAggregateInputType;
};
export type VendorOrderItemGroupByOutputType = {
    id: string;
    vendorOrderId: string;
    productVariantId: string;
    quantity: number;
    unitPrice: runtime.Decimal;
    totalPrice: runtime.Decimal;
    snapshot: runtime.JsonValue;
    _count: VendorOrderItemCountAggregateOutputType | null;
    _avg: VendorOrderItemAvgAggregateOutputType | null;
    _sum: VendorOrderItemSumAggregateOutputType | null;
    _min: VendorOrderItemMinAggregateOutputType | null;
    _max: VendorOrderItemMaxAggregateOutputType | null;
};
export type GetVendorOrderItemGroupByPayload<T extends VendorOrderItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VendorOrderItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VendorOrderItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VendorOrderItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VendorOrderItemGroupByOutputType[P]>;
}>>;
export type VendorOrderItemWhereInput = {
    AND?: Prisma.VendorOrderItemWhereInput | Prisma.VendorOrderItemWhereInput[];
    OR?: Prisma.VendorOrderItemWhereInput[];
    NOT?: Prisma.VendorOrderItemWhereInput | Prisma.VendorOrderItemWhereInput[];
    id?: Prisma.StringFilter<"VendorOrderItem"> | string;
    vendorOrderId?: Prisma.StringFilter<"VendorOrderItem"> | string;
    productVariantId?: Prisma.StringFilter<"VendorOrderItem"> | string;
    quantity?: Prisma.IntFilter<"VendorOrderItem"> | number;
    unitPrice?: Prisma.DecimalFilter<"VendorOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFilter<"VendorOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshot?: Prisma.JsonFilter<"VendorOrderItem">;
    productVariant?: Prisma.XOR<Prisma.ProductVariantScalarRelationFilter, Prisma.ProductVariantWhereInput>;
    vendorOrder?: Prisma.XOR<Prisma.VendorOrderScalarRelationFilter, Prisma.VendorOrderWhereInput>;
};
export type VendorOrderItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    vendorOrderId?: Prisma.SortOrder;
    productVariantId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    snapshot?: Prisma.SortOrder;
    productVariant?: Prisma.ProductVariantOrderByWithRelationInput;
    vendorOrder?: Prisma.VendorOrderOrderByWithRelationInput;
};
export type VendorOrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.VendorOrderItemWhereInput | Prisma.VendorOrderItemWhereInput[];
    OR?: Prisma.VendorOrderItemWhereInput[];
    NOT?: Prisma.VendorOrderItemWhereInput | Prisma.VendorOrderItemWhereInput[];
    vendorOrderId?: Prisma.StringFilter<"VendorOrderItem"> | string;
    productVariantId?: Prisma.StringFilter<"VendorOrderItem"> | string;
    quantity?: Prisma.IntFilter<"VendorOrderItem"> | number;
    unitPrice?: Prisma.DecimalFilter<"VendorOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFilter<"VendorOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshot?: Prisma.JsonFilter<"VendorOrderItem">;
    productVariant?: Prisma.XOR<Prisma.ProductVariantScalarRelationFilter, Prisma.ProductVariantWhereInput>;
    vendorOrder?: Prisma.XOR<Prisma.VendorOrderScalarRelationFilter, Prisma.VendorOrderWhereInput>;
}, "id">;
export type VendorOrderItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    vendorOrderId?: Prisma.SortOrder;
    productVariantId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    snapshot?: Prisma.SortOrder;
    _count?: Prisma.VendorOrderItemCountOrderByAggregateInput;
    _avg?: Prisma.VendorOrderItemAvgOrderByAggregateInput;
    _max?: Prisma.VendorOrderItemMaxOrderByAggregateInput;
    _min?: Prisma.VendorOrderItemMinOrderByAggregateInput;
    _sum?: Prisma.VendorOrderItemSumOrderByAggregateInput;
};
export type VendorOrderItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.VendorOrderItemScalarWhereWithAggregatesInput | Prisma.VendorOrderItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.VendorOrderItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VendorOrderItemScalarWhereWithAggregatesInput | Prisma.VendorOrderItemScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"VendorOrderItem"> | string;
    vendorOrderId?: Prisma.StringWithAggregatesFilter<"VendorOrderItem"> | string;
    productVariantId?: Prisma.StringWithAggregatesFilter<"VendorOrderItem"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"VendorOrderItem"> | number;
    unitPrice?: Prisma.DecimalWithAggregatesFilter<"VendorOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalWithAggregatesFilter<"VendorOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshot?: Prisma.JsonWithAggregatesFilter<"VendorOrderItem">;
};
export type VendorOrderItemCreateInput = {
    id?: string;
    quantity?: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    productVariant: Prisma.ProductVariantCreateNestedOneWithoutVendorOrderItemsInput;
    vendorOrder: Prisma.VendorOrderCreateNestedOneWithoutLineItemsInput;
};
export type VendorOrderItemUncheckedCreateInput = {
    id?: string;
    vendorOrderId: string;
    productVariantId: string;
    quantity?: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type VendorOrderItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    productVariant?: Prisma.ProductVariantUpdateOneRequiredWithoutVendorOrderItemsNestedInput;
    vendorOrder?: Prisma.VendorOrderUpdateOneRequiredWithoutLineItemsNestedInput;
};
export type VendorOrderItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    productVariantId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type VendorOrderItemCreateManyInput = {
    id?: string;
    vendorOrderId: string;
    productVariantId: string;
    quantity?: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type VendorOrderItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type VendorOrderItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    productVariantId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type VendorOrderItemListRelationFilter = {
    every?: Prisma.VendorOrderItemWhereInput;
    some?: Prisma.VendorOrderItemWhereInput;
    none?: Prisma.VendorOrderItemWhereInput;
};
export type VendorOrderItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VendorOrderItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    vendorOrderId?: Prisma.SortOrder;
    productVariantId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    snapshot?: Prisma.SortOrder;
};
export type VendorOrderItemAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
};
export type VendorOrderItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    vendorOrderId?: Prisma.SortOrder;
    productVariantId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
};
export type VendorOrderItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    vendorOrderId?: Prisma.SortOrder;
    productVariantId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
};
export type VendorOrderItemSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
};
export type VendorOrderItemCreateNestedManyWithoutProductVariantInput = {
    create?: Prisma.XOR<Prisma.VendorOrderItemCreateWithoutProductVariantInput, Prisma.VendorOrderItemUncheckedCreateWithoutProductVariantInput> | Prisma.VendorOrderItemCreateWithoutProductVariantInput[] | Prisma.VendorOrderItemUncheckedCreateWithoutProductVariantInput[];
    connectOrCreate?: Prisma.VendorOrderItemCreateOrConnectWithoutProductVariantInput | Prisma.VendorOrderItemCreateOrConnectWithoutProductVariantInput[];
    createMany?: Prisma.VendorOrderItemCreateManyProductVariantInputEnvelope;
    connect?: Prisma.VendorOrderItemWhereUniqueInput | Prisma.VendorOrderItemWhereUniqueInput[];
};
export type VendorOrderItemUncheckedCreateNestedManyWithoutProductVariantInput = {
    create?: Prisma.XOR<Prisma.VendorOrderItemCreateWithoutProductVariantInput, Prisma.VendorOrderItemUncheckedCreateWithoutProductVariantInput> | Prisma.VendorOrderItemCreateWithoutProductVariantInput[] | Prisma.VendorOrderItemUncheckedCreateWithoutProductVariantInput[];
    connectOrCreate?: Prisma.VendorOrderItemCreateOrConnectWithoutProductVariantInput | Prisma.VendorOrderItemCreateOrConnectWithoutProductVariantInput[];
    createMany?: Prisma.VendorOrderItemCreateManyProductVariantInputEnvelope;
    connect?: Prisma.VendorOrderItemWhereUniqueInput | Prisma.VendorOrderItemWhereUniqueInput[];
};
export type VendorOrderItemUpdateManyWithoutProductVariantNestedInput = {
    create?: Prisma.XOR<Prisma.VendorOrderItemCreateWithoutProductVariantInput, Prisma.VendorOrderItemUncheckedCreateWithoutProductVariantInput> | Prisma.VendorOrderItemCreateWithoutProductVariantInput[] | Prisma.VendorOrderItemUncheckedCreateWithoutProductVariantInput[];
    connectOrCreate?: Prisma.VendorOrderItemCreateOrConnectWithoutProductVariantInput | Prisma.VendorOrderItemCreateOrConnectWithoutProductVariantInput[];
    upsert?: Prisma.VendorOrderItemUpsertWithWhereUniqueWithoutProductVariantInput | Prisma.VendorOrderItemUpsertWithWhereUniqueWithoutProductVariantInput[];
    createMany?: Prisma.VendorOrderItemCreateManyProductVariantInputEnvelope;
    set?: Prisma.VendorOrderItemWhereUniqueInput | Prisma.VendorOrderItemWhereUniqueInput[];
    disconnect?: Prisma.VendorOrderItemWhereUniqueInput | Prisma.VendorOrderItemWhereUniqueInput[];
    delete?: Prisma.VendorOrderItemWhereUniqueInput | Prisma.VendorOrderItemWhereUniqueInput[];
    connect?: Prisma.VendorOrderItemWhereUniqueInput | Prisma.VendorOrderItemWhereUniqueInput[];
    update?: Prisma.VendorOrderItemUpdateWithWhereUniqueWithoutProductVariantInput | Prisma.VendorOrderItemUpdateWithWhereUniqueWithoutProductVariantInput[];
    updateMany?: Prisma.VendorOrderItemUpdateManyWithWhereWithoutProductVariantInput | Prisma.VendorOrderItemUpdateManyWithWhereWithoutProductVariantInput[];
    deleteMany?: Prisma.VendorOrderItemScalarWhereInput | Prisma.VendorOrderItemScalarWhereInput[];
};
export type VendorOrderItemUncheckedUpdateManyWithoutProductVariantNestedInput = {
    create?: Prisma.XOR<Prisma.VendorOrderItemCreateWithoutProductVariantInput, Prisma.VendorOrderItemUncheckedCreateWithoutProductVariantInput> | Prisma.VendorOrderItemCreateWithoutProductVariantInput[] | Prisma.VendorOrderItemUncheckedCreateWithoutProductVariantInput[];
    connectOrCreate?: Prisma.VendorOrderItemCreateOrConnectWithoutProductVariantInput | Prisma.VendorOrderItemCreateOrConnectWithoutProductVariantInput[];
    upsert?: Prisma.VendorOrderItemUpsertWithWhereUniqueWithoutProductVariantInput | Prisma.VendorOrderItemUpsertWithWhereUniqueWithoutProductVariantInput[];
    createMany?: Prisma.VendorOrderItemCreateManyProductVariantInputEnvelope;
    set?: Prisma.VendorOrderItemWhereUniqueInput | Prisma.VendorOrderItemWhereUniqueInput[];
    disconnect?: Prisma.VendorOrderItemWhereUniqueInput | Prisma.VendorOrderItemWhereUniqueInput[];
    delete?: Prisma.VendorOrderItemWhereUniqueInput | Prisma.VendorOrderItemWhereUniqueInput[];
    connect?: Prisma.VendorOrderItemWhereUniqueInput | Prisma.VendorOrderItemWhereUniqueInput[];
    update?: Prisma.VendorOrderItemUpdateWithWhereUniqueWithoutProductVariantInput | Prisma.VendorOrderItemUpdateWithWhereUniqueWithoutProductVariantInput[];
    updateMany?: Prisma.VendorOrderItemUpdateManyWithWhereWithoutProductVariantInput | Prisma.VendorOrderItemUpdateManyWithWhereWithoutProductVariantInput[];
    deleteMany?: Prisma.VendorOrderItemScalarWhereInput | Prisma.VendorOrderItemScalarWhereInput[];
};
export type VendorOrderItemCreateNestedManyWithoutVendorOrderInput = {
    create?: Prisma.XOR<Prisma.VendorOrderItemCreateWithoutVendorOrderInput, Prisma.VendorOrderItemUncheckedCreateWithoutVendorOrderInput> | Prisma.VendorOrderItemCreateWithoutVendorOrderInput[] | Prisma.VendorOrderItemUncheckedCreateWithoutVendorOrderInput[];
    connectOrCreate?: Prisma.VendorOrderItemCreateOrConnectWithoutVendorOrderInput | Prisma.VendorOrderItemCreateOrConnectWithoutVendorOrderInput[];
    createMany?: Prisma.VendorOrderItemCreateManyVendorOrderInputEnvelope;
    connect?: Prisma.VendorOrderItemWhereUniqueInput | Prisma.VendorOrderItemWhereUniqueInput[];
};
export type VendorOrderItemUncheckedCreateNestedManyWithoutVendorOrderInput = {
    create?: Prisma.XOR<Prisma.VendorOrderItemCreateWithoutVendorOrderInput, Prisma.VendorOrderItemUncheckedCreateWithoutVendorOrderInput> | Prisma.VendorOrderItemCreateWithoutVendorOrderInput[] | Prisma.VendorOrderItemUncheckedCreateWithoutVendorOrderInput[];
    connectOrCreate?: Prisma.VendorOrderItemCreateOrConnectWithoutVendorOrderInput | Prisma.VendorOrderItemCreateOrConnectWithoutVendorOrderInput[];
    createMany?: Prisma.VendorOrderItemCreateManyVendorOrderInputEnvelope;
    connect?: Prisma.VendorOrderItemWhereUniqueInput | Prisma.VendorOrderItemWhereUniqueInput[];
};
export type VendorOrderItemUpdateManyWithoutVendorOrderNestedInput = {
    create?: Prisma.XOR<Prisma.VendorOrderItemCreateWithoutVendorOrderInput, Prisma.VendorOrderItemUncheckedCreateWithoutVendorOrderInput> | Prisma.VendorOrderItemCreateWithoutVendorOrderInput[] | Prisma.VendorOrderItemUncheckedCreateWithoutVendorOrderInput[];
    connectOrCreate?: Prisma.VendorOrderItemCreateOrConnectWithoutVendorOrderInput | Prisma.VendorOrderItemCreateOrConnectWithoutVendorOrderInput[];
    upsert?: Prisma.VendorOrderItemUpsertWithWhereUniqueWithoutVendorOrderInput | Prisma.VendorOrderItemUpsertWithWhereUniqueWithoutVendorOrderInput[];
    createMany?: Prisma.VendorOrderItemCreateManyVendorOrderInputEnvelope;
    set?: Prisma.VendorOrderItemWhereUniqueInput | Prisma.VendorOrderItemWhereUniqueInput[];
    disconnect?: Prisma.VendorOrderItemWhereUniqueInput | Prisma.VendorOrderItemWhereUniqueInput[];
    delete?: Prisma.VendorOrderItemWhereUniqueInput | Prisma.VendorOrderItemWhereUniqueInput[];
    connect?: Prisma.VendorOrderItemWhereUniqueInput | Prisma.VendorOrderItemWhereUniqueInput[];
    update?: Prisma.VendorOrderItemUpdateWithWhereUniqueWithoutVendorOrderInput | Prisma.VendorOrderItemUpdateWithWhereUniqueWithoutVendorOrderInput[];
    updateMany?: Prisma.VendorOrderItemUpdateManyWithWhereWithoutVendorOrderInput | Prisma.VendorOrderItemUpdateManyWithWhereWithoutVendorOrderInput[];
    deleteMany?: Prisma.VendorOrderItemScalarWhereInput | Prisma.VendorOrderItemScalarWhereInput[];
};
export type VendorOrderItemUncheckedUpdateManyWithoutVendorOrderNestedInput = {
    create?: Prisma.XOR<Prisma.VendorOrderItemCreateWithoutVendorOrderInput, Prisma.VendorOrderItemUncheckedCreateWithoutVendorOrderInput> | Prisma.VendorOrderItemCreateWithoutVendorOrderInput[] | Prisma.VendorOrderItemUncheckedCreateWithoutVendorOrderInput[];
    connectOrCreate?: Prisma.VendorOrderItemCreateOrConnectWithoutVendorOrderInput | Prisma.VendorOrderItemCreateOrConnectWithoutVendorOrderInput[];
    upsert?: Prisma.VendorOrderItemUpsertWithWhereUniqueWithoutVendorOrderInput | Prisma.VendorOrderItemUpsertWithWhereUniqueWithoutVendorOrderInput[];
    createMany?: Prisma.VendorOrderItemCreateManyVendorOrderInputEnvelope;
    set?: Prisma.VendorOrderItemWhereUniqueInput | Prisma.VendorOrderItemWhereUniqueInput[];
    disconnect?: Prisma.VendorOrderItemWhereUniqueInput | Prisma.VendorOrderItemWhereUniqueInput[];
    delete?: Prisma.VendorOrderItemWhereUniqueInput | Prisma.VendorOrderItemWhereUniqueInput[];
    connect?: Prisma.VendorOrderItemWhereUniqueInput | Prisma.VendorOrderItemWhereUniqueInput[];
    update?: Prisma.VendorOrderItemUpdateWithWhereUniqueWithoutVendorOrderInput | Prisma.VendorOrderItemUpdateWithWhereUniqueWithoutVendorOrderInput[];
    updateMany?: Prisma.VendorOrderItemUpdateManyWithWhereWithoutVendorOrderInput | Prisma.VendorOrderItemUpdateManyWithWhereWithoutVendorOrderInput[];
    deleteMany?: Prisma.VendorOrderItemScalarWhereInput | Prisma.VendorOrderItemScalarWhereInput[];
};
export type VendorOrderItemCreateWithoutProductVariantInput = {
    id?: string;
    quantity?: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    vendorOrder: Prisma.VendorOrderCreateNestedOneWithoutLineItemsInput;
};
export type VendorOrderItemUncheckedCreateWithoutProductVariantInput = {
    id?: string;
    vendorOrderId: string;
    quantity?: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type VendorOrderItemCreateOrConnectWithoutProductVariantInput = {
    where: Prisma.VendorOrderItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorOrderItemCreateWithoutProductVariantInput, Prisma.VendorOrderItemUncheckedCreateWithoutProductVariantInput>;
};
export type VendorOrderItemCreateManyProductVariantInputEnvelope = {
    data: Prisma.VendorOrderItemCreateManyProductVariantInput | Prisma.VendorOrderItemCreateManyProductVariantInput[];
    skipDuplicates?: boolean;
};
export type VendorOrderItemUpsertWithWhereUniqueWithoutProductVariantInput = {
    where: Prisma.VendorOrderItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.VendorOrderItemUpdateWithoutProductVariantInput, Prisma.VendorOrderItemUncheckedUpdateWithoutProductVariantInput>;
    create: Prisma.XOR<Prisma.VendorOrderItemCreateWithoutProductVariantInput, Prisma.VendorOrderItemUncheckedCreateWithoutProductVariantInput>;
};
export type VendorOrderItemUpdateWithWhereUniqueWithoutProductVariantInput = {
    where: Prisma.VendorOrderItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.VendorOrderItemUpdateWithoutProductVariantInput, Prisma.VendorOrderItemUncheckedUpdateWithoutProductVariantInput>;
};
export type VendorOrderItemUpdateManyWithWhereWithoutProductVariantInput = {
    where: Prisma.VendorOrderItemScalarWhereInput;
    data: Prisma.XOR<Prisma.VendorOrderItemUpdateManyMutationInput, Prisma.VendorOrderItemUncheckedUpdateManyWithoutProductVariantInput>;
};
export type VendorOrderItemScalarWhereInput = {
    AND?: Prisma.VendorOrderItemScalarWhereInput | Prisma.VendorOrderItemScalarWhereInput[];
    OR?: Prisma.VendorOrderItemScalarWhereInput[];
    NOT?: Prisma.VendorOrderItemScalarWhereInput | Prisma.VendorOrderItemScalarWhereInput[];
    id?: Prisma.StringFilter<"VendorOrderItem"> | string;
    vendorOrderId?: Prisma.StringFilter<"VendorOrderItem"> | string;
    productVariantId?: Prisma.StringFilter<"VendorOrderItem"> | string;
    quantity?: Prisma.IntFilter<"VendorOrderItem"> | number;
    unitPrice?: Prisma.DecimalFilter<"VendorOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFilter<"VendorOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshot?: Prisma.JsonFilter<"VendorOrderItem">;
};
export type VendorOrderItemCreateWithoutVendorOrderInput = {
    id?: string;
    quantity?: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    productVariant: Prisma.ProductVariantCreateNestedOneWithoutVendorOrderItemsInput;
};
export type VendorOrderItemUncheckedCreateWithoutVendorOrderInput = {
    id?: string;
    productVariantId: string;
    quantity?: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type VendorOrderItemCreateOrConnectWithoutVendorOrderInput = {
    where: Prisma.VendorOrderItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorOrderItemCreateWithoutVendorOrderInput, Prisma.VendorOrderItemUncheckedCreateWithoutVendorOrderInput>;
};
export type VendorOrderItemCreateManyVendorOrderInputEnvelope = {
    data: Prisma.VendorOrderItemCreateManyVendorOrderInput | Prisma.VendorOrderItemCreateManyVendorOrderInput[];
    skipDuplicates?: boolean;
};
export type VendorOrderItemUpsertWithWhereUniqueWithoutVendorOrderInput = {
    where: Prisma.VendorOrderItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.VendorOrderItemUpdateWithoutVendorOrderInput, Prisma.VendorOrderItemUncheckedUpdateWithoutVendorOrderInput>;
    create: Prisma.XOR<Prisma.VendorOrderItemCreateWithoutVendorOrderInput, Prisma.VendorOrderItemUncheckedCreateWithoutVendorOrderInput>;
};
export type VendorOrderItemUpdateWithWhereUniqueWithoutVendorOrderInput = {
    where: Prisma.VendorOrderItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.VendorOrderItemUpdateWithoutVendorOrderInput, Prisma.VendorOrderItemUncheckedUpdateWithoutVendorOrderInput>;
};
export type VendorOrderItemUpdateManyWithWhereWithoutVendorOrderInput = {
    where: Prisma.VendorOrderItemScalarWhereInput;
    data: Prisma.XOR<Prisma.VendorOrderItemUpdateManyMutationInput, Prisma.VendorOrderItemUncheckedUpdateManyWithoutVendorOrderInput>;
};
export type VendorOrderItemCreateManyProductVariantInput = {
    id?: string;
    vendorOrderId: string;
    quantity?: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type VendorOrderItemUpdateWithoutProductVariantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    vendorOrder?: Prisma.VendorOrderUpdateOneRequiredWithoutLineItemsNestedInput;
};
export type VendorOrderItemUncheckedUpdateWithoutProductVariantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type VendorOrderItemUncheckedUpdateManyWithoutProductVariantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type VendorOrderItemCreateManyVendorOrderInput = {
    id?: string;
    productVariantId: string;
    quantity?: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type VendorOrderItemUpdateWithoutVendorOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    productVariant?: Prisma.ProductVariantUpdateOneRequiredWithoutVendorOrderItemsNestedInput;
};
export type VendorOrderItemUncheckedUpdateWithoutVendorOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productVariantId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type VendorOrderItemUncheckedUpdateManyWithoutVendorOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productVariantId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    snapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
};
export type VendorOrderItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    vendorOrderId?: boolean;
    productVariantId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    totalPrice?: boolean;
    snapshot?: boolean;
    productVariant?: boolean | Prisma.ProductVariantDefaultArgs<ExtArgs>;
    vendorOrder?: boolean | Prisma.VendorOrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vendorOrderItem"]>;
export type VendorOrderItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    vendorOrderId?: boolean;
    productVariantId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    totalPrice?: boolean;
    snapshot?: boolean;
    productVariant?: boolean | Prisma.ProductVariantDefaultArgs<ExtArgs>;
    vendorOrder?: boolean | Prisma.VendorOrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vendorOrderItem"]>;
export type VendorOrderItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    vendorOrderId?: boolean;
    productVariantId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    totalPrice?: boolean;
    snapshot?: boolean;
    productVariant?: boolean | Prisma.ProductVariantDefaultArgs<ExtArgs>;
    vendorOrder?: boolean | Prisma.VendorOrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vendorOrderItem"]>;
export type VendorOrderItemSelectScalar = {
    id?: boolean;
    vendorOrderId?: boolean;
    productVariantId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    totalPrice?: boolean;
    snapshot?: boolean;
};
export type VendorOrderItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "vendorOrderId" | "productVariantId" | "quantity" | "unitPrice" | "totalPrice" | "snapshot", ExtArgs["result"]["vendorOrderItem"]>;
export type VendorOrderItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    productVariant?: boolean | Prisma.ProductVariantDefaultArgs<ExtArgs>;
    vendorOrder?: boolean | Prisma.VendorOrderDefaultArgs<ExtArgs>;
};
export type VendorOrderItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    productVariant?: boolean | Prisma.ProductVariantDefaultArgs<ExtArgs>;
    vendorOrder?: boolean | Prisma.VendorOrderDefaultArgs<ExtArgs>;
};
export type VendorOrderItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    productVariant?: boolean | Prisma.ProductVariantDefaultArgs<ExtArgs>;
    vendorOrder?: boolean | Prisma.VendorOrderDefaultArgs<ExtArgs>;
};
export type $VendorOrderItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "VendorOrderItem";
    objects: {
        productVariant: Prisma.$ProductVariantPayload<ExtArgs>;
        vendorOrder: Prisma.$VendorOrderPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        vendorOrderId: string;
        productVariantId: string;
        quantity: number;
        unitPrice: runtime.Decimal;
        totalPrice: runtime.Decimal;
        snapshot: runtime.JsonValue;
    }, ExtArgs["result"]["vendorOrderItem"]>;
    composites: {};
};
export type VendorOrderItemGetPayload<S extends boolean | null | undefined | VendorOrderItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VendorOrderItemPayload, S>;
export type VendorOrderItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VendorOrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VendorOrderItemCountAggregateInputType | true;
};
export interface VendorOrderItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['VendorOrderItem'];
        meta: {
            name: 'VendorOrderItem';
        };
    };
    findUnique<T extends VendorOrderItemFindUniqueArgs>(args: Prisma.SelectSubset<T, VendorOrderItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VendorOrderItemClient<runtime.Types.Result.GetResult<Prisma.$VendorOrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VendorOrderItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VendorOrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VendorOrderItemClient<runtime.Types.Result.GetResult<Prisma.$VendorOrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VendorOrderItemFindFirstArgs>(args?: Prisma.SelectSubset<T, VendorOrderItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__VendorOrderItemClient<runtime.Types.Result.GetResult<Prisma.$VendorOrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VendorOrderItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VendorOrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VendorOrderItemClient<runtime.Types.Result.GetResult<Prisma.$VendorOrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VendorOrderItemFindManyArgs>(args?: Prisma.SelectSubset<T, VendorOrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VendorOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VendorOrderItemCreateArgs>(args: Prisma.SelectSubset<T, VendorOrderItemCreateArgs<ExtArgs>>): Prisma.Prisma__VendorOrderItemClient<runtime.Types.Result.GetResult<Prisma.$VendorOrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VendorOrderItemCreateManyArgs>(args?: Prisma.SelectSubset<T, VendorOrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends VendorOrderItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VendorOrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VendorOrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends VendorOrderItemDeleteArgs>(args: Prisma.SelectSubset<T, VendorOrderItemDeleteArgs<ExtArgs>>): Prisma.Prisma__VendorOrderItemClient<runtime.Types.Result.GetResult<Prisma.$VendorOrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VendorOrderItemUpdateArgs>(args: Prisma.SelectSubset<T, VendorOrderItemUpdateArgs<ExtArgs>>): Prisma.Prisma__VendorOrderItemClient<runtime.Types.Result.GetResult<Prisma.$VendorOrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VendorOrderItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, VendorOrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VendorOrderItemUpdateManyArgs>(args: Prisma.SelectSubset<T, VendorOrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends VendorOrderItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VendorOrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VendorOrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends VendorOrderItemUpsertArgs>(args: Prisma.SelectSubset<T, VendorOrderItemUpsertArgs<ExtArgs>>): Prisma.Prisma__VendorOrderItemClient<runtime.Types.Result.GetResult<Prisma.$VendorOrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VendorOrderItemCountArgs>(args?: Prisma.Subset<T, VendorOrderItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VendorOrderItemCountAggregateOutputType> : number>;
    aggregate<T extends VendorOrderItemAggregateArgs>(args: Prisma.Subset<T, VendorOrderItemAggregateArgs>): Prisma.PrismaPromise<GetVendorOrderItemAggregateType<T>>;
    groupBy<T extends VendorOrderItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VendorOrderItemGroupByArgs['orderBy'];
    } : {
        orderBy?: VendorOrderItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VendorOrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VendorOrderItemFieldRefs;
}
export interface Prisma__VendorOrderItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    productVariant<T extends Prisma.ProductVariantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductVariantDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    vendorOrder<T extends Prisma.VendorOrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VendorOrderDefaultArgs<ExtArgs>>): Prisma.Prisma__VendorOrderClient<runtime.Types.Result.GetResult<Prisma.$VendorOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VendorOrderItemFieldRefs {
    readonly id: Prisma.FieldRef<"VendorOrderItem", 'String'>;
    readonly vendorOrderId: Prisma.FieldRef<"VendorOrderItem", 'String'>;
    readonly productVariantId: Prisma.FieldRef<"VendorOrderItem", 'String'>;
    readonly quantity: Prisma.FieldRef<"VendorOrderItem", 'Int'>;
    readonly unitPrice: Prisma.FieldRef<"VendorOrderItem", 'Decimal'>;
    readonly totalPrice: Prisma.FieldRef<"VendorOrderItem", 'Decimal'>;
    readonly snapshot: Prisma.FieldRef<"VendorOrderItem", 'Json'>;
}
export type VendorOrderItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorOrderItemSelect<ExtArgs> | null;
    omit?: Prisma.VendorOrderItemOmit<ExtArgs> | null;
    include?: Prisma.VendorOrderItemInclude<ExtArgs> | null;
    where: Prisma.VendorOrderItemWhereUniqueInput;
};
export type VendorOrderItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorOrderItemSelect<ExtArgs> | null;
    omit?: Prisma.VendorOrderItemOmit<ExtArgs> | null;
    include?: Prisma.VendorOrderItemInclude<ExtArgs> | null;
    where: Prisma.VendorOrderItemWhereUniqueInput;
};
export type VendorOrderItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VendorOrderItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VendorOrderItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VendorOrderItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorOrderItemSelect<ExtArgs> | null;
    omit?: Prisma.VendorOrderItemOmit<ExtArgs> | null;
    include?: Prisma.VendorOrderItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VendorOrderItemCreateInput, Prisma.VendorOrderItemUncheckedCreateInput>;
};
export type VendorOrderItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VendorOrderItemCreateManyInput | Prisma.VendorOrderItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VendorOrderItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorOrderItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VendorOrderItemOmit<ExtArgs> | null;
    data: Prisma.VendorOrderItemCreateManyInput | Prisma.VendorOrderItemCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.VendorOrderItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type VendorOrderItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorOrderItemSelect<ExtArgs> | null;
    omit?: Prisma.VendorOrderItemOmit<ExtArgs> | null;
    include?: Prisma.VendorOrderItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VendorOrderItemUpdateInput, Prisma.VendorOrderItemUncheckedUpdateInput>;
    where: Prisma.VendorOrderItemWhereUniqueInput;
};
export type VendorOrderItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VendorOrderItemUpdateManyMutationInput, Prisma.VendorOrderItemUncheckedUpdateManyInput>;
    where?: Prisma.VendorOrderItemWhereInput;
    limit?: number;
};
export type VendorOrderItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorOrderItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VendorOrderItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VendorOrderItemUpdateManyMutationInput, Prisma.VendorOrderItemUncheckedUpdateManyInput>;
    where?: Prisma.VendorOrderItemWhereInput;
    limit?: number;
    include?: Prisma.VendorOrderItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type VendorOrderItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorOrderItemSelect<ExtArgs> | null;
    omit?: Prisma.VendorOrderItemOmit<ExtArgs> | null;
    include?: Prisma.VendorOrderItemInclude<ExtArgs> | null;
    where: Prisma.VendorOrderItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorOrderItemCreateInput, Prisma.VendorOrderItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VendorOrderItemUpdateInput, Prisma.VendorOrderItemUncheckedUpdateInput>;
};
export type VendorOrderItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorOrderItemSelect<ExtArgs> | null;
    omit?: Prisma.VendorOrderItemOmit<ExtArgs> | null;
    include?: Prisma.VendorOrderItemInclude<ExtArgs> | null;
    where: Prisma.VendorOrderItemWhereUniqueInput;
};
export type VendorOrderItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VendorOrderItemWhereInput;
    limit?: number;
};
export type VendorOrderItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorOrderItemSelect<ExtArgs> | null;
    omit?: Prisma.VendorOrderItemOmit<ExtArgs> | null;
    include?: Prisma.VendorOrderItemInclude<ExtArgs> | null;
};
