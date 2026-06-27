import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type VendorOrderModel = runtime.Types.Result.DefaultSelection<Prisma.$VendorOrderPayload>;
export type AggregateVendorOrder = {
    _count: VendorOrderCountAggregateOutputType | null;
    _avg: VendorOrderAvgAggregateOutputType | null;
    _sum: VendorOrderSumAggregateOutputType | null;
    _min: VendorOrderMinAggregateOutputType | null;
    _max: VendorOrderMaxAggregateOutputType | null;
};
export type VendorOrderAvgAggregateOutputType = {
    subTotal: runtime.Decimal | null;
    commission: runtime.Decimal | null;
    total: runtime.Decimal | null;
};
export type VendorOrderSumAggregateOutputType = {
    subTotal: runtime.Decimal | null;
    commission: runtime.Decimal | null;
    total: runtime.Decimal | null;
};
export type VendorOrderMinAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    vendorId: string | null;
    status: $Enums.OrderStatus | null;
    subTotal: runtime.Decimal | null;
    commission: runtime.Decimal | null;
    total: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VendorOrderMaxAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    vendorId: string | null;
    status: $Enums.OrderStatus | null;
    subTotal: runtime.Decimal | null;
    commission: runtime.Decimal | null;
    total: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VendorOrderCountAggregateOutputType = {
    id: number;
    orderId: number;
    vendorId: number;
    status: number;
    subTotal: number;
    commission: number;
    total: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type VendorOrderAvgAggregateInputType = {
    subTotal?: true;
    commission?: true;
    total?: true;
};
export type VendorOrderSumAggregateInputType = {
    subTotal?: true;
    commission?: true;
    total?: true;
};
export type VendorOrderMinAggregateInputType = {
    id?: true;
    orderId?: true;
    vendorId?: true;
    status?: true;
    subTotal?: true;
    commission?: true;
    total?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VendorOrderMaxAggregateInputType = {
    id?: true;
    orderId?: true;
    vendorId?: true;
    status?: true;
    subTotal?: true;
    commission?: true;
    total?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VendorOrderCountAggregateInputType = {
    id?: true;
    orderId?: true;
    vendorId?: true;
    status?: true;
    subTotal?: true;
    commission?: true;
    total?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type VendorOrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VendorOrderWhereInput;
    orderBy?: Prisma.VendorOrderOrderByWithRelationInput | Prisma.VendorOrderOrderByWithRelationInput[];
    cursor?: Prisma.VendorOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VendorOrderCountAggregateInputType;
    _avg?: VendorOrderAvgAggregateInputType;
    _sum?: VendorOrderSumAggregateInputType;
    _min?: VendorOrderMinAggregateInputType;
    _max?: VendorOrderMaxAggregateInputType;
};
export type GetVendorOrderAggregateType<T extends VendorOrderAggregateArgs> = {
    [P in keyof T & keyof AggregateVendorOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVendorOrder[P]> : Prisma.GetScalarType<T[P], AggregateVendorOrder[P]>;
};
export type VendorOrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VendorOrderWhereInput;
    orderBy?: Prisma.VendorOrderOrderByWithAggregationInput | Prisma.VendorOrderOrderByWithAggregationInput[];
    by: Prisma.VendorOrderScalarFieldEnum[] | Prisma.VendorOrderScalarFieldEnum;
    having?: Prisma.VendorOrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VendorOrderCountAggregateInputType | true;
    _avg?: VendorOrderAvgAggregateInputType;
    _sum?: VendorOrderSumAggregateInputType;
    _min?: VendorOrderMinAggregateInputType;
    _max?: VendorOrderMaxAggregateInputType;
};
export type VendorOrderGroupByOutputType = {
    id: string;
    orderId: string;
    vendorId: string;
    status: $Enums.OrderStatus;
    subTotal: runtime.Decimal;
    commission: runtime.Decimal;
    total: runtime.Decimal;
    createdAt: Date;
    updatedAt: Date;
    _count: VendorOrderCountAggregateOutputType | null;
    _avg: VendorOrderAvgAggregateOutputType | null;
    _sum: VendorOrderSumAggregateOutputType | null;
    _min: VendorOrderMinAggregateOutputType | null;
    _max: VendorOrderMaxAggregateOutputType | null;
};
export type GetVendorOrderGroupByPayload<T extends VendorOrderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VendorOrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VendorOrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VendorOrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VendorOrderGroupByOutputType[P]>;
}>>;
export type VendorOrderWhereInput = {
    AND?: Prisma.VendorOrderWhereInput | Prisma.VendorOrderWhereInput[];
    OR?: Prisma.VendorOrderWhereInput[];
    NOT?: Prisma.VendorOrderWhereInput | Prisma.VendorOrderWhereInput[];
    id?: Prisma.StringFilter<"VendorOrder"> | string;
    orderId?: Prisma.StringFilter<"VendorOrder"> | string;
    vendorId?: Prisma.StringFilter<"VendorOrder"> | string;
    status?: Prisma.EnumOrderStatusFilter<"VendorOrder"> | $Enums.OrderStatus;
    subTotal?: Prisma.DecimalFilter<"VendorOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalFilter<"VendorOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFilter<"VendorOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"VendorOrder"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"VendorOrder"> | Date | string;
    lineItems?: Prisma.VendorOrderItemListRelationFilter;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    vendor?: Prisma.XOR<Prisma.VendorScalarRelationFilter, Prisma.VendorWhereInput>;
};
export type VendorOrderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    vendorId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subTotal?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    lineItems?: Prisma.VendorOrderItemOrderByRelationAggregateInput;
    order?: Prisma.OrderOrderByWithRelationInput;
    vendor?: Prisma.VendorOrderByWithRelationInput;
};
export type VendorOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.VendorOrderWhereInput | Prisma.VendorOrderWhereInput[];
    OR?: Prisma.VendorOrderWhereInput[];
    NOT?: Prisma.VendorOrderWhereInput | Prisma.VendorOrderWhereInput[];
    orderId?: Prisma.StringFilter<"VendorOrder"> | string;
    vendorId?: Prisma.StringFilter<"VendorOrder"> | string;
    status?: Prisma.EnumOrderStatusFilter<"VendorOrder"> | $Enums.OrderStatus;
    subTotal?: Prisma.DecimalFilter<"VendorOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalFilter<"VendorOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFilter<"VendorOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"VendorOrder"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"VendorOrder"> | Date | string;
    lineItems?: Prisma.VendorOrderItemListRelationFilter;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.OrderWhereInput>;
    vendor?: Prisma.XOR<Prisma.VendorScalarRelationFilter, Prisma.VendorWhereInput>;
}, "id">;
export type VendorOrderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    vendorId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subTotal?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.VendorOrderCountOrderByAggregateInput;
    _avg?: Prisma.VendorOrderAvgOrderByAggregateInput;
    _max?: Prisma.VendorOrderMaxOrderByAggregateInput;
    _min?: Prisma.VendorOrderMinOrderByAggregateInput;
    _sum?: Prisma.VendorOrderSumOrderByAggregateInput;
};
export type VendorOrderScalarWhereWithAggregatesInput = {
    AND?: Prisma.VendorOrderScalarWhereWithAggregatesInput | Prisma.VendorOrderScalarWhereWithAggregatesInput[];
    OR?: Prisma.VendorOrderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VendorOrderScalarWhereWithAggregatesInput | Prisma.VendorOrderScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"VendorOrder"> | string;
    orderId?: Prisma.StringWithAggregatesFilter<"VendorOrder"> | string;
    vendorId?: Prisma.StringWithAggregatesFilter<"VendorOrder"> | string;
    status?: Prisma.EnumOrderStatusWithAggregatesFilter<"VendorOrder"> | $Enums.OrderStatus;
    subTotal?: Prisma.DecimalWithAggregatesFilter<"VendorOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalWithAggregatesFilter<"VendorOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalWithAggregatesFilter<"VendorOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"VendorOrder"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"VendorOrder"> | Date | string;
};
export type VendorOrderCreateInput = {
    id?: string;
    status?: $Enums.OrderStatus;
    subTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lineItems?: Prisma.VendorOrderItemCreateNestedManyWithoutVendorOrderInput;
    order: Prisma.OrderCreateNestedOneWithoutVendorOrdersInput;
    vendor: Prisma.VendorCreateNestedOneWithoutVendorOrdersInput;
};
export type VendorOrderUncheckedCreateInput = {
    id?: string;
    orderId: string;
    vendorId: string;
    status?: $Enums.OrderStatus;
    subTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lineItems?: Prisma.VendorOrderItemUncheckedCreateNestedManyWithoutVendorOrderInput;
};
export type VendorOrderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lineItems?: Prisma.VendorOrderItemUpdateManyWithoutVendorOrderNestedInput;
    order?: Prisma.OrderUpdateOneRequiredWithoutVendorOrdersNestedInput;
    vendor?: Prisma.VendorUpdateOneRequiredWithoutVendorOrdersNestedInput;
};
export type VendorOrderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lineItems?: Prisma.VendorOrderItemUncheckedUpdateManyWithoutVendorOrderNestedInput;
};
export type VendorOrderCreateManyInput = {
    id?: string;
    orderId: string;
    vendorId: string;
    status?: $Enums.OrderStatus;
    subTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VendorOrderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VendorOrderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VendorOrderListRelationFilter = {
    every?: Prisma.VendorOrderWhereInput;
    some?: Prisma.VendorOrderWhereInput;
    none?: Prisma.VendorOrderWhereInput;
};
export type VendorOrderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VendorOrderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    vendorId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subTotal?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VendorOrderAvgOrderByAggregateInput = {
    subTotal?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type VendorOrderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    vendorId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subTotal?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VendorOrderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    vendorId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    subTotal?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VendorOrderSumOrderByAggregateInput = {
    subTotal?: Prisma.SortOrder;
    commission?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type VendorOrderScalarRelationFilter = {
    is?: Prisma.VendorOrderWhereInput;
    isNot?: Prisma.VendorOrderWhereInput;
};
export type VendorOrderCreateNestedManyWithoutVendorInput = {
    create?: Prisma.XOR<Prisma.VendorOrderCreateWithoutVendorInput, Prisma.VendorOrderUncheckedCreateWithoutVendorInput> | Prisma.VendorOrderCreateWithoutVendorInput[] | Prisma.VendorOrderUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: Prisma.VendorOrderCreateOrConnectWithoutVendorInput | Prisma.VendorOrderCreateOrConnectWithoutVendorInput[];
    createMany?: Prisma.VendorOrderCreateManyVendorInputEnvelope;
    connect?: Prisma.VendorOrderWhereUniqueInput | Prisma.VendorOrderWhereUniqueInput[];
};
export type VendorOrderUncheckedCreateNestedManyWithoutVendorInput = {
    create?: Prisma.XOR<Prisma.VendorOrderCreateWithoutVendorInput, Prisma.VendorOrderUncheckedCreateWithoutVendorInput> | Prisma.VendorOrderCreateWithoutVendorInput[] | Prisma.VendorOrderUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: Prisma.VendorOrderCreateOrConnectWithoutVendorInput | Prisma.VendorOrderCreateOrConnectWithoutVendorInput[];
    createMany?: Prisma.VendorOrderCreateManyVendorInputEnvelope;
    connect?: Prisma.VendorOrderWhereUniqueInput | Prisma.VendorOrderWhereUniqueInput[];
};
export type VendorOrderUpdateManyWithoutVendorNestedInput = {
    create?: Prisma.XOR<Prisma.VendorOrderCreateWithoutVendorInput, Prisma.VendorOrderUncheckedCreateWithoutVendorInput> | Prisma.VendorOrderCreateWithoutVendorInput[] | Prisma.VendorOrderUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: Prisma.VendorOrderCreateOrConnectWithoutVendorInput | Prisma.VendorOrderCreateOrConnectWithoutVendorInput[];
    upsert?: Prisma.VendorOrderUpsertWithWhereUniqueWithoutVendorInput | Prisma.VendorOrderUpsertWithWhereUniqueWithoutVendorInput[];
    createMany?: Prisma.VendorOrderCreateManyVendorInputEnvelope;
    set?: Prisma.VendorOrderWhereUniqueInput | Prisma.VendorOrderWhereUniqueInput[];
    disconnect?: Prisma.VendorOrderWhereUniqueInput | Prisma.VendorOrderWhereUniqueInput[];
    delete?: Prisma.VendorOrderWhereUniqueInput | Prisma.VendorOrderWhereUniqueInput[];
    connect?: Prisma.VendorOrderWhereUniqueInput | Prisma.VendorOrderWhereUniqueInput[];
    update?: Prisma.VendorOrderUpdateWithWhereUniqueWithoutVendorInput | Prisma.VendorOrderUpdateWithWhereUniqueWithoutVendorInput[];
    updateMany?: Prisma.VendorOrderUpdateManyWithWhereWithoutVendorInput | Prisma.VendorOrderUpdateManyWithWhereWithoutVendorInput[];
    deleteMany?: Prisma.VendorOrderScalarWhereInput | Prisma.VendorOrderScalarWhereInput[];
};
export type VendorOrderUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: Prisma.XOR<Prisma.VendorOrderCreateWithoutVendorInput, Prisma.VendorOrderUncheckedCreateWithoutVendorInput> | Prisma.VendorOrderCreateWithoutVendorInput[] | Prisma.VendorOrderUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: Prisma.VendorOrderCreateOrConnectWithoutVendorInput | Prisma.VendorOrderCreateOrConnectWithoutVendorInput[];
    upsert?: Prisma.VendorOrderUpsertWithWhereUniqueWithoutVendorInput | Prisma.VendorOrderUpsertWithWhereUniqueWithoutVendorInput[];
    createMany?: Prisma.VendorOrderCreateManyVendorInputEnvelope;
    set?: Prisma.VendorOrderWhereUniqueInput | Prisma.VendorOrderWhereUniqueInput[];
    disconnect?: Prisma.VendorOrderWhereUniqueInput | Prisma.VendorOrderWhereUniqueInput[];
    delete?: Prisma.VendorOrderWhereUniqueInput | Prisma.VendorOrderWhereUniqueInput[];
    connect?: Prisma.VendorOrderWhereUniqueInput | Prisma.VendorOrderWhereUniqueInput[];
    update?: Prisma.VendorOrderUpdateWithWhereUniqueWithoutVendorInput | Prisma.VendorOrderUpdateWithWhereUniqueWithoutVendorInput[];
    updateMany?: Prisma.VendorOrderUpdateManyWithWhereWithoutVendorInput | Prisma.VendorOrderUpdateManyWithWhereWithoutVendorInput[];
    deleteMany?: Prisma.VendorOrderScalarWhereInput | Prisma.VendorOrderScalarWhereInput[];
};
export type VendorOrderCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.VendorOrderCreateWithoutOrderInput, Prisma.VendorOrderUncheckedCreateWithoutOrderInput> | Prisma.VendorOrderCreateWithoutOrderInput[] | Prisma.VendorOrderUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.VendorOrderCreateOrConnectWithoutOrderInput | Prisma.VendorOrderCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.VendorOrderCreateManyOrderInputEnvelope;
    connect?: Prisma.VendorOrderWhereUniqueInput | Prisma.VendorOrderWhereUniqueInput[];
};
export type VendorOrderUncheckedCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.VendorOrderCreateWithoutOrderInput, Prisma.VendorOrderUncheckedCreateWithoutOrderInput> | Prisma.VendorOrderCreateWithoutOrderInput[] | Prisma.VendorOrderUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.VendorOrderCreateOrConnectWithoutOrderInput | Prisma.VendorOrderCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.VendorOrderCreateManyOrderInputEnvelope;
    connect?: Prisma.VendorOrderWhereUniqueInput | Prisma.VendorOrderWhereUniqueInput[];
};
export type VendorOrderUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.VendorOrderCreateWithoutOrderInput, Prisma.VendorOrderUncheckedCreateWithoutOrderInput> | Prisma.VendorOrderCreateWithoutOrderInput[] | Prisma.VendorOrderUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.VendorOrderCreateOrConnectWithoutOrderInput | Prisma.VendorOrderCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.VendorOrderUpsertWithWhereUniqueWithoutOrderInput | Prisma.VendorOrderUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.VendorOrderCreateManyOrderInputEnvelope;
    set?: Prisma.VendorOrderWhereUniqueInput | Prisma.VendorOrderWhereUniqueInput[];
    disconnect?: Prisma.VendorOrderWhereUniqueInput | Prisma.VendorOrderWhereUniqueInput[];
    delete?: Prisma.VendorOrderWhereUniqueInput | Prisma.VendorOrderWhereUniqueInput[];
    connect?: Prisma.VendorOrderWhereUniqueInput | Prisma.VendorOrderWhereUniqueInput[];
    update?: Prisma.VendorOrderUpdateWithWhereUniqueWithoutOrderInput | Prisma.VendorOrderUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.VendorOrderUpdateManyWithWhereWithoutOrderInput | Prisma.VendorOrderUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.VendorOrderScalarWhereInput | Prisma.VendorOrderScalarWhereInput[];
};
export type VendorOrderUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.VendorOrderCreateWithoutOrderInput, Prisma.VendorOrderUncheckedCreateWithoutOrderInput> | Prisma.VendorOrderCreateWithoutOrderInput[] | Prisma.VendorOrderUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.VendorOrderCreateOrConnectWithoutOrderInput | Prisma.VendorOrderCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.VendorOrderUpsertWithWhereUniqueWithoutOrderInput | Prisma.VendorOrderUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.VendorOrderCreateManyOrderInputEnvelope;
    set?: Prisma.VendorOrderWhereUniqueInput | Prisma.VendorOrderWhereUniqueInput[];
    disconnect?: Prisma.VendorOrderWhereUniqueInput | Prisma.VendorOrderWhereUniqueInput[];
    delete?: Prisma.VendorOrderWhereUniqueInput | Prisma.VendorOrderWhereUniqueInput[];
    connect?: Prisma.VendorOrderWhereUniqueInput | Prisma.VendorOrderWhereUniqueInput[];
    update?: Prisma.VendorOrderUpdateWithWhereUniqueWithoutOrderInput | Prisma.VendorOrderUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.VendorOrderUpdateManyWithWhereWithoutOrderInput | Prisma.VendorOrderUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.VendorOrderScalarWhereInput | Prisma.VendorOrderScalarWhereInput[];
};
export type VendorOrderCreateNestedOneWithoutLineItemsInput = {
    create?: Prisma.XOR<Prisma.VendorOrderCreateWithoutLineItemsInput, Prisma.VendorOrderUncheckedCreateWithoutLineItemsInput>;
    connectOrCreate?: Prisma.VendorOrderCreateOrConnectWithoutLineItemsInput;
    connect?: Prisma.VendorOrderWhereUniqueInput;
};
export type VendorOrderUpdateOneRequiredWithoutLineItemsNestedInput = {
    create?: Prisma.XOR<Prisma.VendorOrderCreateWithoutLineItemsInput, Prisma.VendorOrderUncheckedCreateWithoutLineItemsInput>;
    connectOrCreate?: Prisma.VendorOrderCreateOrConnectWithoutLineItemsInput;
    upsert?: Prisma.VendorOrderUpsertWithoutLineItemsInput;
    connect?: Prisma.VendorOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VendorOrderUpdateToOneWithWhereWithoutLineItemsInput, Prisma.VendorOrderUpdateWithoutLineItemsInput>, Prisma.VendorOrderUncheckedUpdateWithoutLineItemsInput>;
};
export type VendorOrderCreateWithoutVendorInput = {
    id?: string;
    status?: $Enums.OrderStatus;
    subTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lineItems?: Prisma.VendorOrderItemCreateNestedManyWithoutVendorOrderInput;
    order: Prisma.OrderCreateNestedOneWithoutVendorOrdersInput;
};
export type VendorOrderUncheckedCreateWithoutVendorInput = {
    id?: string;
    orderId: string;
    status?: $Enums.OrderStatus;
    subTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lineItems?: Prisma.VendorOrderItemUncheckedCreateNestedManyWithoutVendorOrderInput;
};
export type VendorOrderCreateOrConnectWithoutVendorInput = {
    where: Prisma.VendorOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorOrderCreateWithoutVendorInput, Prisma.VendorOrderUncheckedCreateWithoutVendorInput>;
};
export type VendorOrderCreateManyVendorInputEnvelope = {
    data: Prisma.VendorOrderCreateManyVendorInput | Prisma.VendorOrderCreateManyVendorInput[];
    skipDuplicates?: boolean;
};
export type VendorOrderUpsertWithWhereUniqueWithoutVendorInput = {
    where: Prisma.VendorOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.VendorOrderUpdateWithoutVendorInput, Prisma.VendorOrderUncheckedUpdateWithoutVendorInput>;
    create: Prisma.XOR<Prisma.VendorOrderCreateWithoutVendorInput, Prisma.VendorOrderUncheckedCreateWithoutVendorInput>;
};
export type VendorOrderUpdateWithWhereUniqueWithoutVendorInput = {
    where: Prisma.VendorOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.VendorOrderUpdateWithoutVendorInput, Prisma.VendorOrderUncheckedUpdateWithoutVendorInput>;
};
export type VendorOrderUpdateManyWithWhereWithoutVendorInput = {
    where: Prisma.VendorOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.VendorOrderUpdateManyMutationInput, Prisma.VendorOrderUncheckedUpdateManyWithoutVendorInput>;
};
export type VendorOrderScalarWhereInput = {
    AND?: Prisma.VendorOrderScalarWhereInput | Prisma.VendorOrderScalarWhereInput[];
    OR?: Prisma.VendorOrderScalarWhereInput[];
    NOT?: Prisma.VendorOrderScalarWhereInput | Prisma.VendorOrderScalarWhereInput[];
    id?: Prisma.StringFilter<"VendorOrder"> | string;
    orderId?: Prisma.StringFilter<"VendorOrder"> | string;
    vendorId?: Prisma.StringFilter<"VendorOrder"> | string;
    status?: Prisma.EnumOrderStatusFilter<"VendorOrder"> | $Enums.OrderStatus;
    subTotal?: Prisma.DecimalFilter<"VendorOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalFilter<"VendorOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFilter<"VendorOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"VendorOrder"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"VendorOrder"> | Date | string;
};
export type VendorOrderCreateWithoutOrderInput = {
    id?: string;
    status?: $Enums.OrderStatus;
    subTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lineItems?: Prisma.VendorOrderItemCreateNestedManyWithoutVendorOrderInput;
    vendor: Prisma.VendorCreateNestedOneWithoutVendorOrdersInput;
};
export type VendorOrderUncheckedCreateWithoutOrderInput = {
    id?: string;
    vendorId: string;
    status?: $Enums.OrderStatus;
    subTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lineItems?: Prisma.VendorOrderItemUncheckedCreateNestedManyWithoutVendorOrderInput;
};
export type VendorOrderCreateOrConnectWithoutOrderInput = {
    where: Prisma.VendorOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorOrderCreateWithoutOrderInput, Prisma.VendorOrderUncheckedCreateWithoutOrderInput>;
};
export type VendorOrderCreateManyOrderInputEnvelope = {
    data: Prisma.VendorOrderCreateManyOrderInput | Prisma.VendorOrderCreateManyOrderInput[];
    skipDuplicates?: boolean;
};
export type VendorOrderUpsertWithWhereUniqueWithoutOrderInput = {
    where: Prisma.VendorOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.VendorOrderUpdateWithoutOrderInput, Prisma.VendorOrderUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.VendorOrderCreateWithoutOrderInput, Prisma.VendorOrderUncheckedCreateWithoutOrderInput>;
};
export type VendorOrderUpdateWithWhereUniqueWithoutOrderInput = {
    where: Prisma.VendorOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.VendorOrderUpdateWithoutOrderInput, Prisma.VendorOrderUncheckedUpdateWithoutOrderInput>;
};
export type VendorOrderUpdateManyWithWhereWithoutOrderInput = {
    where: Prisma.VendorOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.VendorOrderUpdateManyMutationInput, Prisma.VendorOrderUncheckedUpdateManyWithoutOrderInput>;
};
export type VendorOrderCreateWithoutLineItemsInput = {
    id?: string;
    status?: $Enums.OrderStatus;
    subTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    order: Prisma.OrderCreateNestedOneWithoutVendorOrdersInput;
    vendor: Prisma.VendorCreateNestedOneWithoutVendorOrdersInput;
};
export type VendorOrderUncheckedCreateWithoutLineItemsInput = {
    id?: string;
    orderId: string;
    vendorId: string;
    status?: $Enums.OrderStatus;
    subTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VendorOrderCreateOrConnectWithoutLineItemsInput = {
    where: Prisma.VendorOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorOrderCreateWithoutLineItemsInput, Prisma.VendorOrderUncheckedCreateWithoutLineItemsInput>;
};
export type VendorOrderUpsertWithoutLineItemsInput = {
    update: Prisma.XOR<Prisma.VendorOrderUpdateWithoutLineItemsInput, Prisma.VendorOrderUncheckedUpdateWithoutLineItemsInput>;
    create: Prisma.XOR<Prisma.VendorOrderCreateWithoutLineItemsInput, Prisma.VendorOrderUncheckedCreateWithoutLineItemsInput>;
    where?: Prisma.VendorOrderWhereInput;
};
export type VendorOrderUpdateToOneWithWhereWithoutLineItemsInput = {
    where?: Prisma.VendorOrderWhereInput;
    data: Prisma.XOR<Prisma.VendorOrderUpdateWithoutLineItemsInput, Prisma.VendorOrderUncheckedUpdateWithoutLineItemsInput>;
};
export type VendorOrderUpdateWithoutLineItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneRequiredWithoutVendorOrdersNestedInput;
    vendor?: Prisma.VendorUpdateOneRequiredWithoutVendorOrdersNestedInput;
};
export type VendorOrderUncheckedUpdateWithoutLineItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VendorOrderCreateManyVendorInput = {
    id?: string;
    orderId: string;
    status?: $Enums.OrderStatus;
    subTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VendorOrderUpdateWithoutVendorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lineItems?: Prisma.VendorOrderItemUpdateManyWithoutVendorOrderNestedInput;
    order?: Prisma.OrderUpdateOneRequiredWithoutVendorOrdersNestedInput;
};
export type VendorOrderUncheckedUpdateWithoutVendorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lineItems?: Prisma.VendorOrderItemUncheckedUpdateManyWithoutVendorOrderNestedInput;
};
export type VendorOrderUncheckedUpdateManyWithoutVendorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VendorOrderCreateManyOrderInput = {
    id?: string;
    vendorId: string;
    status?: $Enums.OrderStatus;
    subTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VendorOrderUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lineItems?: Prisma.VendorOrderItemUpdateManyWithoutVendorOrderNestedInput;
    vendor?: Prisma.VendorUpdateOneRequiredWithoutVendorOrdersNestedInput;
};
export type VendorOrderUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lineItems?: Prisma.VendorOrderItemUncheckedUpdateManyWithoutVendorOrderNestedInput;
};
export type VendorOrderUncheckedUpdateManyWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    subTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    commission?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VendorOrderCountOutputType = {
    lineItems: number;
};
export type VendorOrderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lineItems?: boolean | VendorOrderCountOutputTypeCountLineItemsArgs;
};
export type VendorOrderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorOrderCountOutputTypeSelect<ExtArgs> | null;
};
export type VendorOrderCountOutputTypeCountLineItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VendorOrderItemWhereInput;
};
export type VendorOrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    vendorId?: boolean;
    status?: boolean;
    subTotal?: boolean;
    commission?: boolean;
    total?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    lineItems?: boolean | Prisma.VendorOrder$lineItemsArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.VendorOrderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vendorOrder"]>;
export type VendorOrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    vendorId?: boolean;
    status?: boolean;
    subTotal?: boolean;
    commission?: boolean;
    total?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vendorOrder"]>;
export type VendorOrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    vendorId?: boolean;
    status?: boolean;
    subTotal?: boolean;
    commission?: boolean;
    total?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vendorOrder"]>;
export type VendorOrderSelectScalar = {
    id?: boolean;
    orderId?: boolean;
    vendorId?: boolean;
    status?: boolean;
    subTotal?: boolean;
    commission?: boolean;
    total?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type VendorOrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orderId" | "vendorId" | "status" | "subTotal" | "commission" | "total" | "createdAt" | "updatedAt", ExtArgs["result"]["vendorOrder"]>;
export type VendorOrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lineItems?: boolean | Prisma.VendorOrder$lineItemsArgs<ExtArgs>;
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.VendorOrderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type VendorOrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
};
export type VendorOrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.OrderDefaultArgs<ExtArgs>;
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
};
export type $VendorOrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "VendorOrder";
    objects: {
        lineItems: Prisma.$VendorOrderItemPayload<ExtArgs>[];
        order: Prisma.$OrderPayload<ExtArgs>;
        vendor: Prisma.$VendorPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orderId: string;
        vendorId: string;
        status: $Enums.OrderStatus;
        subTotal: runtime.Decimal;
        commission: runtime.Decimal;
        total: runtime.Decimal;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["vendorOrder"]>;
    composites: {};
};
export type VendorOrderGetPayload<S extends boolean | null | undefined | VendorOrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VendorOrderPayload, S>;
export type VendorOrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VendorOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VendorOrderCountAggregateInputType | true;
};
export interface VendorOrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['VendorOrder'];
        meta: {
            name: 'VendorOrder';
        };
    };
    findUnique<T extends VendorOrderFindUniqueArgs>(args: Prisma.SelectSubset<T, VendorOrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VendorOrderClient<runtime.Types.Result.GetResult<Prisma.$VendorOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VendorOrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VendorOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VendorOrderClient<runtime.Types.Result.GetResult<Prisma.$VendorOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VendorOrderFindFirstArgs>(args?: Prisma.SelectSubset<T, VendorOrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__VendorOrderClient<runtime.Types.Result.GetResult<Prisma.$VendorOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VendorOrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VendorOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VendorOrderClient<runtime.Types.Result.GetResult<Prisma.$VendorOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VendorOrderFindManyArgs>(args?: Prisma.SelectSubset<T, VendorOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VendorOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VendorOrderCreateArgs>(args: Prisma.SelectSubset<T, VendorOrderCreateArgs<ExtArgs>>): Prisma.Prisma__VendorOrderClient<runtime.Types.Result.GetResult<Prisma.$VendorOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VendorOrderCreateManyArgs>(args?: Prisma.SelectSubset<T, VendorOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends VendorOrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VendorOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VendorOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends VendorOrderDeleteArgs>(args: Prisma.SelectSubset<T, VendorOrderDeleteArgs<ExtArgs>>): Prisma.Prisma__VendorOrderClient<runtime.Types.Result.GetResult<Prisma.$VendorOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VendorOrderUpdateArgs>(args: Prisma.SelectSubset<T, VendorOrderUpdateArgs<ExtArgs>>): Prisma.Prisma__VendorOrderClient<runtime.Types.Result.GetResult<Prisma.$VendorOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VendorOrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, VendorOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VendorOrderUpdateManyArgs>(args: Prisma.SelectSubset<T, VendorOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends VendorOrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VendorOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VendorOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends VendorOrderUpsertArgs>(args: Prisma.SelectSubset<T, VendorOrderUpsertArgs<ExtArgs>>): Prisma.Prisma__VendorOrderClient<runtime.Types.Result.GetResult<Prisma.$VendorOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VendorOrderCountArgs>(args?: Prisma.Subset<T, VendorOrderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VendorOrderCountAggregateOutputType> : number>;
    aggregate<T extends VendorOrderAggregateArgs>(args: Prisma.Subset<T, VendorOrderAggregateArgs>): Prisma.PrismaPromise<GetVendorOrderAggregateType<T>>;
    groupBy<T extends VendorOrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VendorOrderGroupByArgs['orderBy'];
    } : {
        orderBy?: VendorOrderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VendorOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VendorOrderFieldRefs;
}
export interface Prisma__VendorOrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    lineItems<T extends Prisma.VendorOrder$lineItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VendorOrder$lineItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VendorOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    order<T extends Prisma.OrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrderDefaultArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    vendor<T extends Prisma.VendorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VendorDefaultArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VendorOrderFieldRefs {
    readonly id: Prisma.FieldRef<"VendorOrder", 'String'>;
    readonly orderId: Prisma.FieldRef<"VendorOrder", 'String'>;
    readonly vendorId: Prisma.FieldRef<"VendorOrder", 'String'>;
    readonly status: Prisma.FieldRef<"VendorOrder", 'OrderStatus'>;
    readonly subTotal: Prisma.FieldRef<"VendorOrder", 'Decimal'>;
    readonly commission: Prisma.FieldRef<"VendorOrder", 'Decimal'>;
    readonly total: Prisma.FieldRef<"VendorOrder", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"VendorOrder", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"VendorOrder", 'DateTime'>;
}
export type VendorOrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorOrderSelect<ExtArgs> | null;
    omit?: Prisma.VendorOrderOmit<ExtArgs> | null;
    include?: Prisma.VendorOrderInclude<ExtArgs> | null;
    where: Prisma.VendorOrderWhereUniqueInput;
};
export type VendorOrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorOrderSelect<ExtArgs> | null;
    omit?: Prisma.VendorOrderOmit<ExtArgs> | null;
    include?: Prisma.VendorOrderInclude<ExtArgs> | null;
    where: Prisma.VendorOrderWhereUniqueInput;
};
export type VendorOrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VendorOrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VendorOrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VendorOrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorOrderSelect<ExtArgs> | null;
    omit?: Prisma.VendorOrderOmit<ExtArgs> | null;
    include?: Prisma.VendorOrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VendorOrderCreateInput, Prisma.VendorOrderUncheckedCreateInput>;
};
export type VendorOrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VendorOrderCreateManyInput | Prisma.VendorOrderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VendorOrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorOrderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VendorOrderOmit<ExtArgs> | null;
    data: Prisma.VendorOrderCreateManyInput | Prisma.VendorOrderCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.VendorOrderIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type VendorOrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorOrderSelect<ExtArgs> | null;
    omit?: Prisma.VendorOrderOmit<ExtArgs> | null;
    include?: Prisma.VendorOrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VendorOrderUpdateInput, Prisma.VendorOrderUncheckedUpdateInput>;
    where: Prisma.VendorOrderWhereUniqueInput;
};
export type VendorOrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VendorOrderUpdateManyMutationInput, Prisma.VendorOrderUncheckedUpdateManyInput>;
    where?: Prisma.VendorOrderWhereInput;
    limit?: number;
};
export type VendorOrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorOrderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VendorOrderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VendorOrderUpdateManyMutationInput, Prisma.VendorOrderUncheckedUpdateManyInput>;
    where?: Prisma.VendorOrderWhereInput;
    limit?: number;
    include?: Prisma.VendorOrderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type VendorOrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorOrderSelect<ExtArgs> | null;
    omit?: Prisma.VendorOrderOmit<ExtArgs> | null;
    include?: Prisma.VendorOrderInclude<ExtArgs> | null;
    where: Prisma.VendorOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.VendorOrderCreateInput, Prisma.VendorOrderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VendorOrderUpdateInput, Prisma.VendorOrderUncheckedUpdateInput>;
};
export type VendorOrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorOrderSelect<ExtArgs> | null;
    omit?: Prisma.VendorOrderOmit<ExtArgs> | null;
    include?: Prisma.VendorOrderInclude<ExtArgs> | null;
    where: Prisma.VendorOrderWhereUniqueInput;
};
export type VendorOrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VendorOrderWhereInput;
    limit?: number;
};
export type VendorOrder$lineItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VendorOrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VendorOrderSelect<ExtArgs> | null;
    omit?: Prisma.VendorOrderOmit<ExtArgs> | null;
    include?: Prisma.VendorOrderInclude<ExtArgs> | null;
};
