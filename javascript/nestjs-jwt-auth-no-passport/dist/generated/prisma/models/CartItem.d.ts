import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CartItemModel = runtime.Types.Result.DefaultSelection<Prisma.$CartItemPayload>;
export type AggregateCartItem = {
    _count: CartItemCountAggregateOutputType | null;
    _avg: CartItemAvgAggregateOutputType | null;
    _sum: CartItemSumAggregateOutputType | null;
    _min: CartItemMinAggregateOutputType | null;
    _max: CartItemMaxAggregateOutputType | null;
};
export type CartItemAvgAggregateOutputType = {
    quantity: number | null;
};
export type CartItemSumAggregateOutputType = {
    quantity: number | null;
};
export type CartItemMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    productId: string | null;
    productVariantId: string | null;
    quantity: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CartItemMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    productId: string | null;
    productVariantId: string | null;
    quantity: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CartItemCountAggregateOutputType = {
    id: number;
    userId: number;
    productId: number;
    productVariantId: number;
    quantity: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CartItemAvgAggregateInputType = {
    quantity?: true;
};
export type CartItemSumAggregateInputType = {
    quantity?: true;
};
export type CartItemMinAggregateInputType = {
    id?: true;
    userId?: true;
    productId?: true;
    productVariantId?: true;
    quantity?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CartItemMaxAggregateInputType = {
    id?: true;
    userId?: true;
    productId?: true;
    productVariantId?: true;
    quantity?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CartItemCountAggregateInputType = {
    id?: true;
    userId?: true;
    productId?: true;
    productVariantId?: true;
    quantity?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CartItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CartItemWhereInput;
    orderBy?: Prisma.CartItemOrderByWithRelationInput | Prisma.CartItemOrderByWithRelationInput[];
    cursor?: Prisma.CartItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CartItemCountAggregateInputType;
    _avg?: CartItemAvgAggregateInputType;
    _sum?: CartItemSumAggregateInputType;
    _min?: CartItemMinAggregateInputType;
    _max?: CartItemMaxAggregateInputType;
};
export type GetCartItemAggregateType<T extends CartItemAggregateArgs> = {
    [P in keyof T & keyof AggregateCartItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCartItem[P]> : Prisma.GetScalarType<T[P], AggregateCartItem[P]>;
};
export type CartItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CartItemWhereInput;
    orderBy?: Prisma.CartItemOrderByWithAggregationInput | Prisma.CartItemOrderByWithAggregationInput[];
    by: Prisma.CartItemScalarFieldEnum[] | Prisma.CartItemScalarFieldEnum;
    having?: Prisma.CartItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CartItemCountAggregateInputType | true;
    _avg?: CartItemAvgAggregateInputType;
    _sum?: CartItemSumAggregateInputType;
    _min?: CartItemMinAggregateInputType;
    _max?: CartItemMaxAggregateInputType;
};
export type CartItemGroupByOutputType = {
    id: string;
    userId: string;
    productId: string;
    productVariantId: string;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
    _count: CartItemCountAggregateOutputType | null;
    _avg: CartItemAvgAggregateOutputType | null;
    _sum: CartItemSumAggregateOutputType | null;
    _min: CartItemMinAggregateOutputType | null;
    _max: CartItemMaxAggregateOutputType | null;
};
export type GetCartItemGroupByPayload<T extends CartItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CartItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CartItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CartItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CartItemGroupByOutputType[P]>;
}>>;
export type CartItemWhereInput = {
    AND?: Prisma.CartItemWhereInput | Prisma.CartItemWhereInput[];
    OR?: Prisma.CartItemWhereInput[];
    NOT?: Prisma.CartItemWhereInput | Prisma.CartItemWhereInput[];
    id?: Prisma.StringFilter<"CartItem"> | string;
    userId?: Prisma.StringFilter<"CartItem"> | string;
    productId?: Prisma.StringFilter<"CartItem"> | string;
    productVariantId?: Prisma.StringFilter<"CartItem"> | string;
    quantity?: Prisma.IntFilter<"CartItem"> | number;
    createdAt?: Prisma.DateTimeFilter<"CartItem"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CartItem"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    productVariant?: Prisma.XOR<Prisma.ProductVariantScalarRelationFilter, Prisma.ProductVariantWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type CartItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    productVariantId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    product?: Prisma.ProductOrderByWithRelationInput;
    productVariant?: Prisma.ProductVariantOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type CartItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_productVariantId?: Prisma.CartItemUserIdProductVariantIdCompoundUniqueInput;
    AND?: Prisma.CartItemWhereInput | Prisma.CartItemWhereInput[];
    OR?: Prisma.CartItemWhereInput[];
    NOT?: Prisma.CartItemWhereInput | Prisma.CartItemWhereInput[];
    userId?: Prisma.StringFilter<"CartItem"> | string;
    productId?: Prisma.StringFilter<"CartItem"> | string;
    productVariantId?: Prisma.StringFilter<"CartItem"> | string;
    quantity?: Prisma.IntFilter<"CartItem"> | number;
    createdAt?: Prisma.DateTimeFilter<"CartItem"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CartItem"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    productVariant?: Prisma.XOR<Prisma.ProductVariantScalarRelationFilter, Prisma.ProductVariantWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId_productVariantId">;
export type CartItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    productVariantId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CartItemCountOrderByAggregateInput;
    _avg?: Prisma.CartItemAvgOrderByAggregateInput;
    _max?: Prisma.CartItemMaxOrderByAggregateInput;
    _min?: Prisma.CartItemMinOrderByAggregateInput;
    _sum?: Prisma.CartItemSumOrderByAggregateInput;
};
export type CartItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.CartItemScalarWhereWithAggregatesInput | Prisma.CartItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.CartItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CartItemScalarWhereWithAggregatesInput | Prisma.CartItemScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CartItem"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"CartItem"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"CartItem"> | string;
    productVariantId?: Prisma.StringWithAggregatesFilter<"CartItem"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"CartItem"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CartItem"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CartItem"> | Date | string;
};
export type CartItemCreateInput = {
    id?: string;
    quantity?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutCartItemsInput;
    productVariant: Prisma.ProductVariantCreateNestedOneWithoutCartItemsInput;
    user: Prisma.UserCreateNestedOneWithoutCartItemsInput;
};
export type CartItemUncheckedCreateInput = {
    id?: string;
    userId: string;
    productId: string;
    productVariantId: string;
    quantity?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CartItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutCartItemsNestedInput;
    productVariant?: Prisma.ProductVariantUpdateOneRequiredWithoutCartItemsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutCartItemsNestedInput;
};
export type CartItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productVariantId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CartItemCreateManyInput = {
    id?: string;
    userId: string;
    productId: string;
    productVariantId: string;
    quantity?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CartItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CartItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productVariantId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CartItemListRelationFilter = {
    every?: Prisma.CartItemWhereInput;
    some?: Prisma.CartItemWhereInput;
    none?: Prisma.CartItemWhereInput;
};
export type CartItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CartItemUserIdProductVariantIdCompoundUniqueInput = {
    userId: string;
    productVariantId: string;
};
export type CartItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    productVariantId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CartItemAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type CartItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    productVariantId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CartItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    productVariantId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CartItemSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type CartItemCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CartItemCreateWithoutUserInput, Prisma.CartItemUncheckedCreateWithoutUserInput> | Prisma.CartItemCreateWithoutUserInput[] | Prisma.CartItemUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CartItemCreateOrConnectWithoutUserInput | Prisma.CartItemCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CartItemCreateManyUserInputEnvelope;
    connect?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
};
export type CartItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CartItemCreateWithoutUserInput, Prisma.CartItemUncheckedCreateWithoutUserInput> | Prisma.CartItemCreateWithoutUserInput[] | Prisma.CartItemUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CartItemCreateOrConnectWithoutUserInput | Prisma.CartItemCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CartItemCreateManyUserInputEnvelope;
    connect?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
};
export type CartItemUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CartItemCreateWithoutUserInput, Prisma.CartItemUncheckedCreateWithoutUserInput> | Prisma.CartItemCreateWithoutUserInput[] | Prisma.CartItemUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CartItemCreateOrConnectWithoutUserInput | Prisma.CartItemCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CartItemUpsertWithWhereUniqueWithoutUserInput | Prisma.CartItemUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CartItemCreateManyUserInputEnvelope;
    set?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
    disconnect?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
    delete?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
    connect?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
    update?: Prisma.CartItemUpdateWithWhereUniqueWithoutUserInput | Prisma.CartItemUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CartItemUpdateManyWithWhereWithoutUserInput | Prisma.CartItemUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CartItemScalarWhereInput | Prisma.CartItemScalarWhereInput[];
};
export type CartItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CartItemCreateWithoutUserInput, Prisma.CartItemUncheckedCreateWithoutUserInput> | Prisma.CartItemCreateWithoutUserInput[] | Prisma.CartItemUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CartItemCreateOrConnectWithoutUserInput | Prisma.CartItemCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CartItemUpsertWithWhereUniqueWithoutUserInput | Prisma.CartItemUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CartItemCreateManyUserInputEnvelope;
    set?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
    disconnect?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
    delete?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
    connect?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
    update?: Prisma.CartItemUpdateWithWhereUniqueWithoutUserInput | Prisma.CartItemUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CartItemUpdateManyWithWhereWithoutUserInput | Prisma.CartItemUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CartItemScalarWhereInput | Prisma.CartItemScalarWhereInput[];
};
export type CartItemCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.CartItemCreateWithoutProductInput, Prisma.CartItemUncheckedCreateWithoutProductInput> | Prisma.CartItemCreateWithoutProductInput[] | Prisma.CartItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.CartItemCreateOrConnectWithoutProductInput | Prisma.CartItemCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.CartItemCreateManyProductInputEnvelope;
    connect?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
};
export type CartItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.CartItemCreateWithoutProductInput, Prisma.CartItemUncheckedCreateWithoutProductInput> | Prisma.CartItemCreateWithoutProductInput[] | Prisma.CartItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.CartItemCreateOrConnectWithoutProductInput | Prisma.CartItemCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.CartItemCreateManyProductInputEnvelope;
    connect?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
};
export type CartItemUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.CartItemCreateWithoutProductInput, Prisma.CartItemUncheckedCreateWithoutProductInput> | Prisma.CartItemCreateWithoutProductInput[] | Prisma.CartItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.CartItemCreateOrConnectWithoutProductInput | Prisma.CartItemCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.CartItemUpsertWithWhereUniqueWithoutProductInput | Prisma.CartItemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.CartItemCreateManyProductInputEnvelope;
    set?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
    disconnect?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
    delete?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
    connect?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
    update?: Prisma.CartItemUpdateWithWhereUniqueWithoutProductInput | Prisma.CartItemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.CartItemUpdateManyWithWhereWithoutProductInput | Prisma.CartItemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.CartItemScalarWhereInput | Prisma.CartItemScalarWhereInput[];
};
export type CartItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.CartItemCreateWithoutProductInput, Prisma.CartItemUncheckedCreateWithoutProductInput> | Prisma.CartItemCreateWithoutProductInput[] | Prisma.CartItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.CartItemCreateOrConnectWithoutProductInput | Prisma.CartItemCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.CartItemUpsertWithWhereUniqueWithoutProductInput | Prisma.CartItemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.CartItemCreateManyProductInputEnvelope;
    set?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
    disconnect?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
    delete?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
    connect?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
    update?: Prisma.CartItemUpdateWithWhereUniqueWithoutProductInput | Prisma.CartItemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.CartItemUpdateManyWithWhereWithoutProductInput | Prisma.CartItemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.CartItemScalarWhereInput | Prisma.CartItemScalarWhereInput[];
};
export type CartItemCreateNestedManyWithoutProductVariantInput = {
    create?: Prisma.XOR<Prisma.CartItemCreateWithoutProductVariantInput, Prisma.CartItemUncheckedCreateWithoutProductVariantInput> | Prisma.CartItemCreateWithoutProductVariantInput[] | Prisma.CartItemUncheckedCreateWithoutProductVariantInput[];
    connectOrCreate?: Prisma.CartItemCreateOrConnectWithoutProductVariantInput | Prisma.CartItemCreateOrConnectWithoutProductVariantInput[];
    createMany?: Prisma.CartItemCreateManyProductVariantInputEnvelope;
    connect?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
};
export type CartItemUncheckedCreateNestedManyWithoutProductVariantInput = {
    create?: Prisma.XOR<Prisma.CartItemCreateWithoutProductVariantInput, Prisma.CartItemUncheckedCreateWithoutProductVariantInput> | Prisma.CartItemCreateWithoutProductVariantInput[] | Prisma.CartItemUncheckedCreateWithoutProductVariantInput[];
    connectOrCreate?: Prisma.CartItemCreateOrConnectWithoutProductVariantInput | Prisma.CartItemCreateOrConnectWithoutProductVariantInput[];
    createMany?: Prisma.CartItemCreateManyProductVariantInputEnvelope;
    connect?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
};
export type CartItemUpdateManyWithoutProductVariantNestedInput = {
    create?: Prisma.XOR<Prisma.CartItemCreateWithoutProductVariantInput, Prisma.CartItemUncheckedCreateWithoutProductVariantInput> | Prisma.CartItemCreateWithoutProductVariantInput[] | Prisma.CartItemUncheckedCreateWithoutProductVariantInput[];
    connectOrCreate?: Prisma.CartItemCreateOrConnectWithoutProductVariantInput | Prisma.CartItemCreateOrConnectWithoutProductVariantInput[];
    upsert?: Prisma.CartItemUpsertWithWhereUniqueWithoutProductVariantInput | Prisma.CartItemUpsertWithWhereUniqueWithoutProductVariantInput[];
    createMany?: Prisma.CartItemCreateManyProductVariantInputEnvelope;
    set?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
    disconnect?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
    delete?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
    connect?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
    update?: Prisma.CartItemUpdateWithWhereUniqueWithoutProductVariantInput | Prisma.CartItemUpdateWithWhereUniqueWithoutProductVariantInput[];
    updateMany?: Prisma.CartItemUpdateManyWithWhereWithoutProductVariantInput | Prisma.CartItemUpdateManyWithWhereWithoutProductVariantInput[];
    deleteMany?: Prisma.CartItemScalarWhereInput | Prisma.CartItemScalarWhereInput[];
};
export type CartItemUncheckedUpdateManyWithoutProductVariantNestedInput = {
    create?: Prisma.XOR<Prisma.CartItemCreateWithoutProductVariantInput, Prisma.CartItemUncheckedCreateWithoutProductVariantInput> | Prisma.CartItemCreateWithoutProductVariantInput[] | Prisma.CartItemUncheckedCreateWithoutProductVariantInput[];
    connectOrCreate?: Prisma.CartItemCreateOrConnectWithoutProductVariantInput | Prisma.CartItemCreateOrConnectWithoutProductVariantInput[];
    upsert?: Prisma.CartItemUpsertWithWhereUniqueWithoutProductVariantInput | Prisma.CartItemUpsertWithWhereUniqueWithoutProductVariantInput[];
    createMany?: Prisma.CartItemCreateManyProductVariantInputEnvelope;
    set?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
    disconnect?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
    delete?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
    connect?: Prisma.CartItemWhereUniqueInput | Prisma.CartItemWhereUniqueInput[];
    update?: Prisma.CartItemUpdateWithWhereUniqueWithoutProductVariantInput | Prisma.CartItemUpdateWithWhereUniqueWithoutProductVariantInput[];
    updateMany?: Prisma.CartItemUpdateManyWithWhereWithoutProductVariantInput | Prisma.CartItemUpdateManyWithWhereWithoutProductVariantInput[];
    deleteMany?: Prisma.CartItemScalarWhereInput | Prisma.CartItemScalarWhereInput[];
};
export type CartItemCreateWithoutUserInput = {
    id?: string;
    quantity?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutCartItemsInput;
    productVariant: Prisma.ProductVariantCreateNestedOneWithoutCartItemsInput;
};
export type CartItemUncheckedCreateWithoutUserInput = {
    id?: string;
    productId: string;
    productVariantId: string;
    quantity?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CartItemCreateOrConnectWithoutUserInput = {
    where: Prisma.CartItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.CartItemCreateWithoutUserInput, Prisma.CartItemUncheckedCreateWithoutUserInput>;
};
export type CartItemCreateManyUserInputEnvelope = {
    data: Prisma.CartItemCreateManyUserInput | Prisma.CartItemCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type CartItemUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.CartItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.CartItemUpdateWithoutUserInput, Prisma.CartItemUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CartItemCreateWithoutUserInput, Prisma.CartItemUncheckedCreateWithoutUserInput>;
};
export type CartItemUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.CartItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.CartItemUpdateWithoutUserInput, Prisma.CartItemUncheckedUpdateWithoutUserInput>;
};
export type CartItemUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.CartItemScalarWhereInput;
    data: Prisma.XOR<Prisma.CartItemUpdateManyMutationInput, Prisma.CartItemUncheckedUpdateManyWithoutUserInput>;
};
export type CartItemScalarWhereInput = {
    AND?: Prisma.CartItemScalarWhereInput | Prisma.CartItemScalarWhereInput[];
    OR?: Prisma.CartItemScalarWhereInput[];
    NOT?: Prisma.CartItemScalarWhereInput | Prisma.CartItemScalarWhereInput[];
    id?: Prisma.StringFilter<"CartItem"> | string;
    userId?: Prisma.StringFilter<"CartItem"> | string;
    productId?: Prisma.StringFilter<"CartItem"> | string;
    productVariantId?: Prisma.StringFilter<"CartItem"> | string;
    quantity?: Prisma.IntFilter<"CartItem"> | number;
    createdAt?: Prisma.DateTimeFilter<"CartItem"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CartItem"> | Date | string;
};
export type CartItemCreateWithoutProductInput = {
    id?: string;
    quantity?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    productVariant: Prisma.ProductVariantCreateNestedOneWithoutCartItemsInput;
    user: Prisma.UserCreateNestedOneWithoutCartItemsInput;
};
export type CartItemUncheckedCreateWithoutProductInput = {
    id?: string;
    userId: string;
    productVariantId: string;
    quantity?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CartItemCreateOrConnectWithoutProductInput = {
    where: Prisma.CartItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.CartItemCreateWithoutProductInput, Prisma.CartItemUncheckedCreateWithoutProductInput>;
};
export type CartItemCreateManyProductInputEnvelope = {
    data: Prisma.CartItemCreateManyProductInput | Prisma.CartItemCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type CartItemUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.CartItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.CartItemUpdateWithoutProductInput, Prisma.CartItemUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.CartItemCreateWithoutProductInput, Prisma.CartItemUncheckedCreateWithoutProductInput>;
};
export type CartItemUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.CartItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.CartItemUpdateWithoutProductInput, Prisma.CartItemUncheckedUpdateWithoutProductInput>;
};
export type CartItemUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.CartItemScalarWhereInput;
    data: Prisma.XOR<Prisma.CartItemUpdateManyMutationInput, Prisma.CartItemUncheckedUpdateManyWithoutProductInput>;
};
export type CartItemCreateWithoutProductVariantInput = {
    id?: string;
    quantity?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutCartItemsInput;
    user: Prisma.UserCreateNestedOneWithoutCartItemsInput;
};
export type CartItemUncheckedCreateWithoutProductVariantInput = {
    id?: string;
    userId: string;
    productId: string;
    quantity?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CartItemCreateOrConnectWithoutProductVariantInput = {
    where: Prisma.CartItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.CartItemCreateWithoutProductVariantInput, Prisma.CartItemUncheckedCreateWithoutProductVariantInput>;
};
export type CartItemCreateManyProductVariantInputEnvelope = {
    data: Prisma.CartItemCreateManyProductVariantInput | Prisma.CartItemCreateManyProductVariantInput[];
    skipDuplicates?: boolean;
};
export type CartItemUpsertWithWhereUniqueWithoutProductVariantInput = {
    where: Prisma.CartItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.CartItemUpdateWithoutProductVariantInput, Prisma.CartItemUncheckedUpdateWithoutProductVariantInput>;
    create: Prisma.XOR<Prisma.CartItemCreateWithoutProductVariantInput, Prisma.CartItemUncheckedCreateWithoutProductVariantInput>;
};
export type CartItemUpdateWithWhereUniqueWithoutProductVariantInput = {
    where: Prisma.CartItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.CartItemUpdateWithoutProductVariantInput, Prisma.CartItemUncheckedUpdateWithoutProductVariantInput>;
};
export type CartItemUpdateManyWithWhereWithoutProductVariantInput = {
    where: Prisma.CartItemScalarWhereInput;
    data: Prisma.XOR<Prisma.CartItemUpdateManyMutationInput, Prisma.CartItemUncheckedUpdateManyWithoutProductVariantInput>;
};
export type CartItemCreateManyUserInput = {
    id?: string;
    productId: string;
    productVariantId: string;
    quantity?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CartItemUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutCartItemsNestedInput;
    productVariant?: Prisma.ProductVariantUpdateOneRequiredWithoutCartItemsNestedInput;
};
export type CartItemUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productVariantId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CartItemUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    productVariantId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CartItemCreateManyProductInput = {
    id?: string;
    userId: string;
    productVariantId: string;
    quantity?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CartItemUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    productVariant?: Prisma.ProductVariantUpdateOneRequiredWithoutCartItemsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutCartItemsNestedInput;
};
export type CartItemUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    productVariantId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CartItemUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    productVariantId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CartItemCreateManyProductVariantInput = {
    id?: string;
    userId: string;
    productId: string;
    quantity?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CartItemUpdateWithoutProductVariantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutCartItemsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutCartItemsNestedInput;
};
export type CartItemUncheckedUpdateWithoutProductVariantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CartItemUncheckedUpdateManyWithoutProductVariantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CartItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    productId?: boolean;
    productVariantId?: boolean;
    quantity?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    productVariant?: boolean | Prisma.ProductVariantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cartItem"]>;
export type CartItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    productId?: boolean;
    productVariantId?: boolean;
    quantity?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    productVariant?: boolean | Prisma.ProductVariantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cartItem"]>;
export type CartItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    productId?: boolean;
    productVariantId?: boolean;
    quantity?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    productVariant?: boolean | Prisma.ProductVariantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cartItem"]>;
export type CartItemSelectScalar = {
    id?: boolean;
    userId?: boolean;
    productId?: boolean;
    productVariantId?: boolean;
    quantity?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CartItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "productId" | "productVariantId" | "quantity" | "createdAt" | "updatedAt", ExtArgs["result"]["cartItem"]>;
export type CartItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    productVariant?: boolean | Prisma.ProductVariantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CartItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    productVariant?: boolean | Prisma.ProductVariantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CartItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    productVariant?: boolean | Prisma.ProductVariantDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $CartItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CartItem";
    objects: {
        product: Prisma.$ProductPayload<ExtArgs>;
        productVariant: Prisma.$ProductVariantPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        productId: string;
        productVariantId: string;
        quantity: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["cartItem"]>;
    composites: {};
};
export type CartItemGetPayload<S extends boolean | null | undefined | CartItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CartItemPayload, S>;
export type CartItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CartItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CartItemCountAggregateInputType | true;
};
export interface CartItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CartItem'];
        meta: {
            name: 'CartItem';
        };
    };
    findUnique<T extends CartItemFindUniqueArgs>(args: Prisma.SelectSubset<T, CartItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CartItemClient<runtime.Types.Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CartItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CartItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CartItemClient<runtime.Types.Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CartItemFindFirstArgs>(args?: Prisma.SelectSubset<T, CartItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__CartItemClient<runtime.Types.Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CartItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CartItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CartItemClient<runtime.Types.Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CartItemFindManyArgs>(args?: Prisma.SelectSubset<T, CartItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CartItemCreateArgs>(args: Prisma.SelectSubset<T, CartItemCreateArgs<ExtArgs>>): Prisma.Prisma__CartItemClient<runtime.Types.Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CartItemCreateManyArgs>(args?: Prisma.SelectSubset<T, CartItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CartItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CartItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CartItemDeleteArgs>(args: Prisma.SelectSubset<T, CartItemDeleteArgs<ExtArgs>>): Prisma.Prisma__CartItemClient<runtime.Types.Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CartItemUpdateArgs>(args: Prisma.SelectSubset<T, CartItemUpdateArgs<ExtArgs>>): Prisma.Prisma__CartItemClient<runtime.Types.Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CartItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, CartItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CartItemUpdateManyArgs>(args: Prisma.SelectSubset<T, CartItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CartItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CartItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CartItemUpsertArgs>(args: Prisma.SelectSubset<T, CartItemUpsertArgs<ExtArgs>>): Prisma.Prisma__CartItemClient<runtime.Types.Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CartItemCountArgs>(args?: Prisma.Subset<T, CartItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CartItemCountAggregateOutputType> : number>;
    aggregate<T extends CartItemAggregateArgs>(args: Prisma.Subset<T, CartItemAggregateArgs>): Prisma.PrismaPromise<GetCartItemAggregateType<T>>;
    groupBy<T extends CartItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CartItemGroupByArgs['orderBy'];
    } : {
        orderBy?: CartItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CartItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CartItemFieldRefs;
}
export interface Prisma__CartItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    productVariant<T extends Prisma.ProductVariantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductVariantDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CartItemFieldRefs {
    readonly id: Prisma.FieldRef<"CartItem", 'String'>;
    readonly userId: Prisma.FieldRef<"CartItem", 'String'>;
    readonly productId: Prisma.FieldRef<"CartItem", 'String'>;
    readonly productVariantId: Prisma.FieldRef<"CartItem", 'String'>;
    readonly quantity: Prisma.FieldRef<"CartItem", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"CartItem", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CartItem", 'DateTime'>;
}
export type CartItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartItemSelect<ExtArgs> | null;
    omit?: Prisma.CartItemOmit<ExtArgs> | null;
    include?: Prisma.CartItemInclude<ExtArgs> | null;
    where: Prisma.CartItemWhereUniqueInput;
};
export type CartItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartItemSelect<ExtArgs> | null;
    omit?: Prisma.CartItemOmit<ExtArgs> | null;
    include?: Prisma.CartItemInclude<ExtArgs> | null;
    where: Prisma.CartItemWhereUniqueInput;
};
export type CartItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CartItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CartItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CartItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartItemSelect<ExtArgs> | null;
    omit?: Prisma.CartItemOmit<ExtArgs> | null;
    include?: Prisma.CartItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CartItemCreateInput, Prisma.CartItemUncheckedCreateInput>;
};
export type CartItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CartItemCreateManyInput | Prisma.CartItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CartItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CartItemOmit<ExtArgs> | null;
    data: Prisma.CartItemCreateManyInput | Prisma.CartItemCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CartItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CartItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartItemSelect<ExtArgs> | null;
    omit?: Prisma.CartItemOmit<ExtArgs> | null;
    include?: Prisma.CartItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CartItemUpdateInput, Prisma.CartItemUncheckedUpdateInput>;
    where: Prisma.CartItemWhereUniqueInput;
};
export type CartItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CartItemUpdateManyMutationInput, Prisma.CartItemUncheckedUpdateManyInput>;
    where?: Prisma.CartItemWhereInput;
    limit?: number;
};
export type CartItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CartItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CartItemUpdateManyMutationInput, Prisma.CartItemUncheckedUpdateManyInput>;
    where?: Prisma.CartItemWhereInput;
    limit?: number;
    include?: Prisma.CartItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CartItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartItemSelect<ExtArgs> | null;
    omit?: Prisma.CartItemOmit<ExtArgs> | null;
    include?: Prisma.CartItemInclude<ExtArgs> | null;
    where: Prisma.CartItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.CartItemCreateInput, Prisma.CartItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CartItemUpdateInput, Prisma.CartItemUncheckedUpdateInput>;
};
export type CartItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartItemSelect<ExtArgs> | null;
    omit?: Prisma.CartItemOmit<ExtArgs> | null;
    include?: Prisma.CartItemInclude<ExtArgs> | null;
    where: Prisma.CartItemWhereUniqueInput;
};
export type CartItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CartItemWhereInput;
    limit?: number;
};
export type CartItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartItemSelect<ExtArgs> | null;
    omit?: Prisma.CartItemOmit<ExtArgs> | null;
    include?: Prisma.CartItemInclude<ExtArgs> | null;
};
