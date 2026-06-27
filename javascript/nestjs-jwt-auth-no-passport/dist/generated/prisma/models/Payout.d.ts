import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PayoutModel = runtime.Types.Result.DefaultSelection<Prisma.$PayoutPayload>;
export type AggregatePayout = {
    _count: PayoutCountAggregateOutputType | null;
    _avg: PayoutAvgAggregateOutputType | null;
    _sum: PayoutSumAggregateOutputType | null;
    _min: PayoutMinAggregateOutputType | null;
    _max: PayoutMaxAggregateOutputType | null;
};
export type PayoutAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type PayoutSumAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type PayoutMinAggregateOutputType = {
    id: string | null;
    vendorId: string | null;
    amount: runtime.Decimal | null;
    currency: string | null;
    stripeTransferId: string | null;
    status: string | null;
    processedAt: Date | null;
    createdAt: Date | null;
};
export type PayoutMaxAggregateOutputType = {
    id: string | null;
    vendorId: string | null;
    amount: runtime.Decimal | null;
    currency: string | null;
    stripeTransferId: string | null;
    status: string | null;
    processedAt: Date | null;
    createdAt: Date | null;
};
export type PayoutCountAggregateOutputType = {
    id: number;
    vendorId: number;
    amount: number;
    currency: number;
    stripeTransferId: number;
    status: number;
    processedAt: number;
    createdAt: number;
    _all: number;
};
export type PayoutAvgAggregateInputType = {
    amount?: true;
};
export type PayoutSumAggregateInputType = {
    amount?: true;
};
export type PayoutMinAggregateInputType = {
    id?: true;
    vendorId?: true;
    amount?: true;
    currency?: true;
    stripeTransferId?: true;
    status?: true;
    processedAt?: true;
    createdAt?: true;
};
export type PayoutMaxAggregateInputType = {
    id?: true;
    vendorId?: true;
    amount?: true;
    currency?: true;
    stripeTransferId?: true;
    status?: true;
    processedAt?: true;
    createdAt?: true;
};
export type PayoutCountAggregateInputType = {
    id?: true;
    vendorId?: true;
    amount?: true;
    currency?: true;
    stripeTransferId?: true;
    status?: true;
    processedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type PayoutAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutWhereInput;
    orderBy?: Prisma.PayoutOrderByWithRelationInput | Prisma.PayoutOrderByWithRelationInput[];
    cursor?: Prisma.PayoutWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PayoutCountAggregateInputType;
    _avg?: PayoutAvgAggregateInputType;
    _sum?: PayoutSumAggregateInputType;
    _min?: PayoutMinAggregateInputType;
    _max?: PayoutMaxAggregateInputType;
};
export type GetPayoutAggregateType<T extends PayoutAggregateArgs> = {
    [P in keyof T & keyof AggregatePayout]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayout[P]> : Prisma.GetScalarType<T[P], AggregatePayout[P]>;
};
export type PayoutGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutWhereInput;
    orderBy?: Prisma.PayoutOrderByWithAggregationInput | Prisma.PayoutOrderByWithAggregationInput[];
    by: Prisma.PayoutScalarFieldEnum[] | Prisma.PayoutScalarFieldEnum;
    having?: Prisma.PayoutScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PayoutCountAggregateInputType | true;
    _avg?: PayoutAvgAggregateInputType;
    _sum?: PayoutSumAggregateInputType;
    _min?: PayoutMinAggregateInputType;
    _max?: PayoutMaxAggregateInputType;
};
export type PayoutGroupByOutputType = {
    id: string;
    vendorId: string;
    amount: runtime.Decimal;
    currency: string;
    stripeTransferId: string | null;
    status: string;
    processedAt: Date | null;
    createdAt: Date;
    _count: PayoutCountAggregateOutputType | null;
    _avg: PayoutAvgAggregateOutputType | null;
    _sum: PayoutSumAggregateOutputType | null;
    _min: PayoutMinAggregateOutputType | null;
    _max: PayoutMaxAggregateOutputType | null;
};
export type GetPayoutGroupByPayload<T extends PayoutGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PayoutGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PayoutGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PayoutGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PayoutGroupByOutputType[P]>;
}>>;
export type PayoutWhereInput = {
    AND?: Prisma.PayoutWhereInput | Prisma.PayoutWhereInput[];
    OR?: Prisma.PayoutWhereInput[];
    NOT?: Prisma.PayoutWhereInput | Prisma.PayoutWhereInput[];
    id?: Prisma.StringFilter<"Payout"> | string;
    vendorId?: Prisma.StringFilter<"Payout"> | string;
    amount?: Prisma.DecimalFilter<"Payout"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Payout"> | string;
    stripeTransferId?: Prisma.StringNullableFilter<"Payout"> | string | null;
    status?: Prisma.StringFilter<"Payout"> | string;
    processedAt?: Prisma.DateTimeNullableFilter<"Payout"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Payout"> | Date | string;
    vendor?: Prisma.XOR<Prisma.VendorScalarRelationFilter, Prisma.VendorWhereInput>;
};
export type PayoutOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    vendorId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    stripeTransferId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    processedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    vendor?: Prisma.VendorOrderByWithRelationInput;
};
export type PayoutWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PayoutWhereInput | Prisma.PayoutWhereInput[];
    OR?: Prisma.PayoutWhereInput[];
    NOT?: Prisma.PayoutWhereInput | Prisma.PayoutWhereInput[];
    vendorId?: Prisma.StringFilter<"Payout"> | string;
    amount?: Prisma.DecimalFilter<"Payout"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Payout"> | string;
    stripeTransferId?: Prisma.StringNullableFilter<"Payout"> | string | null;
    status?: Prisma.StringFilter<"Payout"> | string;
    processedAt?: Prisma.DateTimeNullableFilter<"Payout"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Payout"> | Date | string;
    vendor?: Prisma.XOR<Prisma.VendorScalarRelationFilter, Prisma.VendorWhereInput>;
}, "id">;
export type PayoutOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    vendorId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    stripeTransferId?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    processedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PayoutCountOrderByAggregateInput;
    _avg?: Prisma.PayoutAvgOrderByAggregateInput;
    _max?: Prisma.PayoutMaxOrderByAggregateInput;
    _min?: Prisma.PayoutMinOrderByAggregateInput;
    _sum?: Prisma.PayoutSumOrderByAggregateInput;
};
export type PayoutScalarWhereWithAggregatesInput = {
    AND?: Prisma.PayoutScalarWhereWithAggregatesInput | Prisma.PayoutScalarWhereWithAggregatesInput[];
    OR?: Prisma.PayoutScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PayoutScalarWhereWithAggregatesInput | Prisma.PayoutScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Payout"> | string;
    vendorId?: Prisma.StringWithAggregatesFilter<"Payout"> | string;
    amount?: Prisma.DecimalWithAggregatesFilter<"Payout"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringWithAggregatesFilter<"Payout"> | string;
    stripeTransferId?: Prisma.StringNullableWithAggregatesFilter<"Payout"> | string | null;
    status?: Prisma.StringWithAggregatesFilter<"Payout"> | string;
    processedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Payout"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Payout"> | Date | string;
};
export type PayoutCreateInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stripeTransferId?: string | null;
    status?: string;
    processedAt?: Date | string | null;
    createdAt?: Date | string;
    vendor: Prisma.VendorCreateNestedOneWithoutPayoutsInput;
};
export type PayoutUncheckedCreateInput = {
    id?: string;
    vendorId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stripeTransferId?: string | null;
    status?: string;
    processedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PayoutUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeTransferId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vendor?: Prisma.VendorUpdateOneRequiredWithoutPayoutsNestedInput;
};
export type PayoutUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeTransferId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutCreateManyInput = {
    id?: string;
    vendorId: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stripeTransferId?: string | null;
    status?: string;
    processedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PayoutUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeTransferId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vendorId?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeTransferId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutListRelationFilter = {
    every?: Prisma.PayoutWhereInput;
    some?: Prisma.PayoutWhereInput;
    none?: Prisma.PayoutWhereInput;
};
export type PayoutOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PayoutCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    vendorId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    stripeTransferId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    processedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PayoutAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type PayoutMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    vendorId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    stripeTransferId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    processedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PayoutMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    vendorId?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    stripeTransferId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    processedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PayoutSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type PayoutCreateNestedManyWithoutVendorInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutVendorInput, Prisma.PayoutUncheckedCreateWithoutVendorInput> | Prisma.PayoutCreateWithoutVendorInput[] | Prisma.PayoutUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutVendorInput | Prisma.PayoutCreateOrConnectWithoutVendorInput[];
    createMany?: Prisma.PayoutCreateManyVendorInputEnvelope;
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
};
export type PayoutUncheckedCreateNestedManyWithoutVendorInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutVendorInput, Prisma.PayoutUncheckedCreateWithoutVendorInput> | Prisma.PayoutCreateWithoutVendorInput[] | Prisma.PayoutUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutVendorInput | Prisma.PayoutCreateOrConnectWithoutVendorInput[];
    createMany?: Prisma.PayoutCreateManyVendorInputEnvelope;
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
};
export type PayoutUpdateManyWithoutVendorNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutVendorInput, Prisma.PayoutUncheckedCreateWithoutVendorInput> | Prisma.PayoutCreateWithoutVendorInput[] | Prisma.PayoutUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutVendorInput | Prisma.PayoutCreateOrConnectWithoutVendorInput[];
    upsert?: Prisma.PayoutUpsertWithWhereUniqueWithoutVendorInput | Prisma.PayoutUpsertWithWhereUniqueWithoutVendorInput[];
    createMany?: Prisma.PayoutCreateManyVendorInputEnvelope;
    set?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    disconnect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    delete?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    update?: Prisma.PayoutUpdateWithWhereUniqueWithoutVendorInput | Prisma.PayoutUpdateWithWhereUniqueWithoutVendorInput[];
    updateMany?: Prisma.PayoutUpdateManyWithWhereWithoutVendorInput | Prisma.PayoutUpdateManyWithWhereWithoutVendorInput[];
    deleteMany?: Prisma.PayoutScalarWhereInput | Prisma.PayoutScalarWhereInput[];
};
export type PayoutUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: Prisma.XOR<Prisma.PayoutCreateWithoutVendorInput, Prisma.PayoutUncheckedCreateWithoutVendorInput> | Prisma.PayoutCreateWithoutVendorInput[] | Prisma.PayoutUncheckedCreateWithoutVendorInput[];
    connectOrCreate?: Prisma.PayoutCreateOrConnectWithoutVendorInput | Prisma.PayoutCreateOrConnectWithoutVendorInput[];
    upsert?: Prisma.PayoutUpsertWithWhereUniqueWithoutVendorInput | Prisma.PayoutUpsertWithWhereUniqueWithoutVendorInput[];
    createMany?: Prisma.PayoutCreateManyVendorInputEnvelope;
    set?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    disconnect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    delete?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    connect?: Prisma.PayoutWhereUniqueInput | Prisma.PayoutWhereUniqueInput[];
    update?: Prisma.PayoutUpdateWithWhereUniqueWithoutVendorInput | Prisma.PayoutUpdateWithWhereUniqueWithoutVendorInput[];
    updateMany?: Prisma.PayoutUpdateManyWithWhereWithoutVendorInput | Prisma.PayoutUpdateManyWithWhereWithoutVendorInput[];
    deleteMany?: Prisma.PayoutScalarWhereInput | Prisma.PayoutScalarWhereInput[];
};
export type PayoutCreateWithoutVendorInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stripeTransferId?: string | null;
    status?: string;
    processedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PayoutUncheckedCreateWithoutVendorInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stripeTransferId?: string | null;
    status?: string;
    processedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PayoutCreateOrConnectWithoutVendorInput = {
    where: Prisma.PayoutWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayoutCreateWithoutVendorInput, Prisma.PayoutUncheckedCreateWithoutVendorInput>;
};
export type PayoutCreateManyVendorInputEnvelope = {
    data: Prisma.PayoutCreateManyVendorInput | Prisma.PayoutCreateManyVendorInput[];
    skipDuplicates?: boolean;
};
export type PayoutUpsertWithWhereUniqueWithoutVendorInput = {
    where: Prisma.PayoutWhereUniqueInput;
    update: Prisma.XOR<Prisma.PayoutUpdateWithoutVendorInput, Prisma.PayoutUncheckedUpdateWithoutVendorInput>;
    create: Prisma.XOR<Prisma.PayoutCreateWithoutVendorInput, Prisma.PayoutUncheckedCreateWithoutVendorInput>;
};
export type PayoutUpdateWithWhereUniqueWithoutVendorInput = {
    where: Prisma.PayoutWhereUniqueInput;
    data: Prisma.XOR<Prisma.PayoutUpdateWithoutVendorInput, Prisma.PayoutUncheckedUpdateWithoutVendorInput>;
};
export type PayoutUpdateManyWithWhereWithoutVendorInput = {
    where: Prisma.PayoutScalarWhereInput;
    data: Prisma.XOR<Prisma.PayoutUpdateManyMutationInput, Prisma.PayoutUncheckedUpdateManyWithoutVendorInput>;
};
export type PayoutScalarWhereInput = {
    AND?: Prisma.PayoutScalarWhereInput | Prisma.PayoutScalarWhereInput[];
    OR?: Prisma.PayoutScalarWhereInput[];
    NOT?: Prisma.PayoutScalarWhereInput | Prisma.PayoutScalarWhereInput[];
    id?: Prisma.StringFilter<"Payout"> | string;
    vendorId?: Prisma.StringFilter<"Payout"> | string;
    amount?: Prisma.DecimalFilter<"Payout"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Payout"> | string;
    stripeTransferId?: Prisma.StringNullableFilter<"Payout"> | string | null;
    status?: Prisma.StringFilter<"Payout"> | string;
    processedAt?: Prisma.DateTimeNullableFilter<"Payout"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Payout"> | Date | string;
};
export type PayoutCreateManyVendorInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stripeTransferId?: string | null;
    status?: string;
    processedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type PayoutUpdateWithoutVendorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeTransferId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutUncheckedUpdateWithoutVendorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeTransferId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutUncheckedUpdateManyWithoutVendorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stripeTransferId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    processedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PayoutSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    vendorId?: boolean;
    amount?: boolean;
    currency?: boolean;
    stripeTransferId?: boolean;
    status?: boolean;
    processedAt?: boolean;
    createdAt?: boolean;
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payout"]>;
export type PayoutSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    vendorId?: boolean;
    amount?: boolean;
    currency?: boolean;
    stripeTransferId?: boolean;
    status?: boolean;
    processedAt?: boolean;
    createdAt?: boolean;
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payout"]>;
export type PayoutSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    vendorId?: boolean;
    amount?: boolean;
    currency?: boolean;
    stripeTransferId?: boolean;
    status?: boolean;
    processedAt?: boolean;
    createdAt?: boolean;
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payout"]>;
export type PayoutSelectScalar = {
    id?: boolean;
    vendorId?: boolean;
    amount?: boolean;
    currency?: boolean;
    stripeTransferId?: boolean;
    status?: boolean;
    processedAt?: boolean;
    createdAt?: boolean;
};
export type PayoutOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "vendorId" | "amount" | "currency" | "stripeTransferId" | "status" | "processedAt" | "createdAt", ExtArgs["result"]["payout"]>;
export type PayoutInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
};
export type PayoutIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
};
export type PayoutIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vendor?: boolean | Prisma.VendorDefaultArgs<ExtArgs>;
};
export type $PayoutPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Payout";
    objects: {
        vendor: Prisma.$VendorPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        vendorId: string;
        amount: runtime.Decimal;
        currency: string;
        stripeTransferId: string | null;
        status: string;
        processedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["payout"]>;
    composites: {};
};
export type PayoutGetPayload<S extends boolean | null | undefined | PayoutDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PayoutPayload, S>;
export type PayoutCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PayoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PayoutCountAggregateInputType | true;
};
export interface PayoutDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Payout'];
        meta: {
            name: 'Payout';
        };
    };
    findUnique<T extends PayoutFindUniqueArgs>(args: Prisma.SelectSubset<T, PayoutFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PayoutClient<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PayoutFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PayoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PayoutClient<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PayoutFindFirstArgs>(args?: Prisma.SelectSubset<T, PayoutFindFirstArgs<ExtArgs>>): Prisma.Prisma__PayoutClient<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PayoutFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PayoutFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PayoutClient<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PayoutFindManyArgs>(args?: Prisma.SelectSubset<T, PayoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PayoutCreateArgs>(args: Prisma.SelectSubset<T, PayoutCreateArgs<ExtArgs>>): Prisma.Prisma__PayoutClient<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PayoutCreateManyArgs>(args?: Prisma.SelectSubset<T, PayoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PayoutCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PayoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PayoutDeleteArgs>(args: Prisma.SelectSubset<T, PayoutDeleteArgs<ExtArgs>>): Prisma.Prisma__PayoutClient<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PayoutUpdateArgs>(args: Prisma.SelectSubset<T, PayoutUpdateArgs<ExtArgs>>): Prisma.Prisma__PayoutClient<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PayoutDeleteManyArgs>(args?: Prisma.SelectSubset<T, PayoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PayoutUpdateManyArgs>(args: Prisma.SelectSubset<T, PayoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PayoutUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PayoutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PayoutUpsertArgs>(args: Prisma.SelectSubset<T, PayoutUpsertArgs<ExtArgs>>): Prisma.Prisma__PayoutClient<runtime.Types.Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PayoutCountArgs>(args?: Prisma.Subset<T, PayoutCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PayoutCountAggregateOutputType> : number>;
    aggregate<T extends PayoutAggregateArgs>(args: Prisma.Subset<T, PayoutAggregateArgs>): Prisma.PrismaPromise<GetPayoutAggregateType<T>>;
    groupBy<T extends PayoutGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PayoutGroupByArgs['orderBy'];
    } : {
        orderBy?: PayoutGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PayoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PayoutFieldRefs;
}
export interface Prisma__PayoutClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    vendor<T extends Prisma.VendorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VendorDefaultArgs<ExtArgs>>): Prisma.Prisma__VendorClient<runtime.Types.Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PayoutFieldRefs {
    readonly id: Prisma.FieldRef<"Payout", 'String'>;
    readonly vendorId: Prisma.FieldRef<"Payout", 'String'>;
    readonly amount: Prisma.FieldRef<"Payout", 'Decimal'>;
    readonly currency: Prisma.FieldRef<"Payout", 'String'>;
    readonly stripeTransferId: Prisma.FieldRef<"Payout", 'String'>;
    readonly status: Prisma.FieldRef<"Payout", 'String'>;
    readonly processedAt: Prisma.FieldRef<"Payout", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Payout", 'DateTime'>;
}
export type PayoutFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    where: Prisma.PayoutWhereUniqueInput;
};
export type PayoutFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    where: Prisma.PayoutWhereUniqueInput;
};
export type PayoutFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PayoutFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PayoutFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PayoutCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayoutCreateInput, Prisma.PayoutUncheckedCreateInput>;
};
export type PayoutCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PayoutCreateManyInput | Prisma.PayoutCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PayoutCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    data: Prisma.PayoutCreateManyInput | Prisma.PayoutCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PayoutIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PayoutUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayoutUpdateInput, Prisma.PayoutUncheckedUpdateInput>;
    where: Prisma.PayoutWhereUniqueInput;
};
export type PayoutUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PayoutUpdateManyMutationInput, Prisma.PayoutUncheckedUpdateManyInput>;
    where?: Prisma.PayoutWhereInput;
    limit?: number;
};
export type PayoutUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PayoutUpdateManyMutationInput, Prisma.PayoutUncheckedUpdateManyInput>;
    where?: Prisma.PayoutWhereInput;
    limit?: number;
    include?: Prisma.PayoutIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PayoutUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    where: Prisma.PayoutWhereUniqueInput;
    create: Prisma.XOR<Prisma.PayoutCreateInput, Prisma.PayoutUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PayoutUpdateInput, Prisma.PayoutUncheckedUpdateInput>;
};
export type PayoutDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    include?: Prisma.PayoutInclude<ExtArgs> | null;
    where: Prisma.PayoutWhereUniqueInput;
};
export type PayoutDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PayoutWhereInput;
    limit?: number;
};
export type PayoutDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PayoutSelect<ExtArgs> | null;
    omit?: Prisma.PayoutOmit<ExtArgs> | null;
    include?: Prisma.PayoutInclude<ExtArgs> | null;
};
