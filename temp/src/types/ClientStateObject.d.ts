type ClientStateObject<TypeName extends string, T> = T & {
  __typename: TypeName;
};
