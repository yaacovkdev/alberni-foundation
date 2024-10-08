// Mock Grants Data
const GrantsData: {title: string, description: string, foundation: boolean, category: string}[] = [];

for (let i = 0; i < 3; i++) {
  GrantsData.push({
        title: "Grant Name",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque id neque nec maximus. Fusce vitae tortor malesuada, vestibulum tortor et, venenatis nisl. Sed scelerisque, augue nec fringilla consectetur, mi purus euismod odio, sit amet dapibus mauris neque nec purus. Integer feugiat odio sit amet eros aliquet, at pulvinar elit bibendum. Quisque sodales, justo id tincidunt ullamcorper, enim orci viverra eros, at luctus mi sem at lorem. Nullam eu sem ut ligula tincidunt efficitur ac eu justo. Mauris suscipit fermentum aliquam. Ut turpis risus, pretium id cursus in, dapibus in mauris. Praesent vitae magna at tortor posuere gravida. Integer efficitur velit vel turpis condimentum, at volutpat eros feugiat. In hac habitasse platea dictumst. Vivamus lacinia sapien in mi aliquam, eget luctus odio hendrerit. Sed sed bibendum arcu. Cras quis gravida est. Curabitur at felis mi. Pellentesque auctor est id nisl finibus, in consequat lorem suscipit. Nunc convallis justo nec ullamcorper tincidunt.",
        foundation: true,
        category: "Social Services",
    });
}

for (let i = 0; i < 2; i++) {
  GrantsData.push({
        title: "Grant Name",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque id neque nec maximus. Fusce vitae tortor malesuada, vestibulum tortor et, venenatis nisl. Sed scelerisque, augue nec fringilla consectetur, mi purus euismod odio, sit amet dapibus mauris neque nec purus. Integer feugiat odio sit amet eros aliquet, at pulvinar elit bibendum. Quisque sodales, justo id tincidunt ullamcorper, enim orci viverra eros, at luctus mi sem at lorem. Nullam eu sem ut ligula tincidunt efficitur ac eu justo. Mauris suscipit fermentum aliquam. Ut turpis risus, pretium id cursus in, dapibus in mauris. Praesent vitae magna at tortor posuere gravida. Integer efficitur velit vel turpis condimentum, at volutpat eros feugiat. In hac habitasse platea dictumst. Vivamus lacinia sapien in mi aliquam, eget luctus odio hendrerit. Sed sed bibendum arcu. Cras quis gravida est. Curabitur at felis mi. Pellentesque auctor est id nisl finibus, in consequat lorem suscipit. Nunc convallis justo nec ullamcorper tincidunt.",
        foundation: false,
        category: "Social Services",
    });
}

export default GrantsData;