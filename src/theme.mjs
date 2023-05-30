import colors from "./colors.mjs";

export default {
  $schema: "vscode://schemas/color-theme",
  name: "Nocturno",
  type: "dark",
  colors: {
    "editor.inactiveSelectionBackground": "#3A3D41",
    "editorIndentGuide.background": "#ffffff05",
    "list.activeSelectionIconForeground": "#FFF",
    "list.dropBackground": "#383B3D",
    "menu.foreground": colors.ui.foreground,
    "panelTitle.activeForeground": colors.ui.foreground,
    "panelTitle.inactiveForeground": "#5b5b62",
    "ports.iconRunningProcessForeground": "#369432",
    "sideBarTitle.foreground": colors.ui.foreground,
    "statusBarItem.remoteBackground": "#16825D",
    "statusBarItem.remoteForeground": "#FFF",
    "tab.lastPinnedBorder": "#ccc3",
    "terminal.inactiveSelectionBackground": "#3A3D41",
    "widget.border": "#303031",
    "button.background": "#7da1d8",
    "button.foreground": "#000000c7",
    "checkbox.border": "#6B6B6B",

    "minimap.errorHighlight": "#c46800",
    "panel.border": "#ffffff05",
    "scrollbar.shadow": "#00000025",

    // Base colors
    "icon.foreground": colors.ui.foreground,
    foreground: colors.ui.foreground,
    focusBorder: "#ffffff00",

    // Activity bar (Bar with icons at the left side)
    "activityBar.background": colors.ui.background,
    "activityBar.foreground": colors.ui.foreground,
    "activityBar.border": colors.ui.border,
    "activityBar.inactiveForeground": colors.ui.foregroundSecondary,
    "activityBarBadge.background": "#444857",
    "activityBarBadge.foreground": "#ffffffff",
    // Banner
    //"banner.background": colors.ui.backgroundSecondary,
    // Breadcrumbs colors
    "breadcrumb.foreground": colors.ui.foregroundSecondary,
    // Command Center
    //"commandCenter.activeBackground": colors.ui.backgroundSecondary,
    // Dropdown control
    "dropdown.background": colors.ui.backgroundSecondary,
    "dropdown.foreground": colors.ui.foreground,
    "dropdown.listBackground": colors.ui.backgroundSecondary,
    "dropdown.border": "#00000000",
    // Editor
    "editor.background": colors.ui.background,
    "editor.foreground": colors.ui.foreground,
    "editor.selectionHighlightBackground": "#ffffff05",
    "editor.selectionBackground": "#202538",
    "editor.findMatchBackground": "#ffffff15",
    "editor.findMatchHighlightBackground": "#ffffff0a",
    "editor.findMatchHighlightBorder": "#ffffff30",
    "editor.wordHighlightBackground": "#23293f60",
    "editor.wordHighlightStrongBackground": "#23293f60",
    "editorCursor.foreground": "#e4e4e4",
    "editorError.foreground": colors.ui.error,
    "editorInfo.foreground": colors.ui.info,
    "editorGutter.addedBackground": colors.ui.added,
    "editorGutter.modifiedBackground": colors.ui.modified,
    "editorGutter.deletedBackground": colors.ui.removed,
    "editorIndentGuide.activeBackground": "#ffffff15",
    "editorRuler.foreground": "#ffffff07",
    // Editor - Overview ruler:
    // This ruler is located beneath the scroll bar on the right edge of the editor and gives an overview of the decorations in the editor.
    "editorOverviewRuler.border": "#00000000",
    "editorOverviewRuler.errorForeground": colors.ui.error,
    "editorOverviewRuler.warningForeground": colors.ui.warning,
    "editorOverviewRuler.infoForeground": colors.ui.info,

    // Editor Groups & Tabs
    "editorGroup.border": colors.ui.border,
    "editorGroupHeader.tabsBackground": colors.ui.background,
    "tab.activeBackground": colors.ui.background,
    "tab.activeForeground": colors.ui.foreground,
    "tab.inactiveBackground": colors.ui.background,
    "tab.inactiveForeground": colors.ui.foregroundSecondary,
    "tab.unfocusedActiveBackground": colors.ui.background,
    "tab.unfocusedActiveForeground": colors.ui.foreground,
    "tab.unfocusedInactiveForeground": colors.ui.foregroundSecondary,
    "tab.border": "#00000000",
    "tab.activeBorder": "#00000000",
    "tab.activeBorderTop": colors.ui.foreground,
    // Editor hints
    "editorHint.foreground": "#494949",
    // Editor widget
    "widget.shadow": "#00000000",
    "editorWidget.border": colors.ui.foreground,
    "editorWidget.background": colors.ui.backgroundSecondary,
    "editorWidget.foreground": colors.ui.foreground,
    // Git
    "gitDecoration.ignoredResourceForeground": "#ffffff40",
    "gitDecoration.modifiedResourceForeground": colors.ui.modified,
    "gitDecoration.deletedResourceForeground": colors.ui.removed,
    "gitDecoration.addedResourceForeground": colors.ui.added,
    // Input control
    "input.background": colors.ui.foregroundSecondary,
    "input.foreground": colors.ui.foreground,
    "input.placeholderForeground": colors.ui.foregroundSecondary,
    // Line highlight
    "editor.lineHighlightBorder": "#00000000",
    "editor.lineHighlightBackground": "#ffffff07",
    "editor.rangeHighlightBackground": "#ffffff07",
    // Line numbers
    "editorLineNumber.foreground": colors.ui.backgroundSecondary,
    "editorLineNumber.activeForeground": colors.tokens.foregroundSecondary,
    // Lists and trees
    "list.hoverBackground": "#00000010",
    "list.hoverForeground": "#afafb6",
    "list.activeSelectionBackground": "#ffffff0a",
    "list.activeSelectionForeground": "#afafb6",
    "list.inactiveSelectionBackground": "#ffffff0a",
    "list.inactiveSelectionForeground": "#afafb6",
    "list.focusBackground": "#ffffff09",
    "list.focusForeground": "#7da1d8",
    "list.errorForeground": colors.ui.error,
    "tree.indentGuidesStroke": "#ffffff09",
    // Menu Bar colors
    "menubar.selectionBackground": "#00000050",
    "menubar.selectionForeground": colors.ui.foreground,
    "menu.background": "#151418",
    "menu.selectionBackground": "#00000050",
    "menu.selectionForeground": colors.ui.foreground,
    "menu.border": "#00000000",
    "menu.separatorBackground": "#ffffff20",
    "menu.selectionBorder": "#00000000",
    // Peek view
    "peekView.border": "#1c1f2a",
    "peekViewTitle.background": "#1c1f2a",
    "peekViewTitleLabel.foreground": colors.ui.foreground,
    "peekViewTitleDescription.foreground": "#30333f",
    // Sidebar
    "sideBar.background": colors.ui.background,
    "sideBar.foreground": colors.ui.foreground,
    "sideBar.border": "#ffffff05",
    "sideBarSectionHeader.background": "#00000000",
    "sideBarSectionHeader.foreground": colors.ui.foregroundSecondary,
    "sideBarSectionHeader.border": "#00000000",
    // Status bar
    "statusBar.background": colors.ui.background,
    "statusBar.foreground": colors.ui.foregroundSecondary,
    "statusBar.debuggingForeground": "#ffffffcc",
    "statusBar.debuggingBackground": "#a95c3d",
    "statusBar.noFolderForeground": "#ffffffcc",
    // Terminal
    "terminal.foreground": colors.ui.foreground,
    "terminal.ansiRed": colors.tokens.color5,
    "terminal.ansiBrightRed": colors.tokens.color5,
    "terminal.ansiBlue": colors.tokens.color3,
    "terminal.ansiBrightBlue": colors.tokens.color3,
    "terminal.ansiBrightGreen": colors.tokens.color4,
    "terminal.ansiGreen": colors.tokens.color4,
    "terminal.ansiCyan": colors.tokens.color6,
    "terminal.ansiBrightCyan": colors.tokens.color6,
    // Title bar
    "titleBar.activeBackground": colors.ui.background,
    "titleBar.activeForeground": colors.ui.foreground,
    "titleBar.inactiveBackground": colors.ui.background,
    "titleBar.inactiveForeground": "#46464f",
    "titleBar.border": "#00000000",
  },
  tokenColors: [
    {
      name: "Gray",
      scope: [
        "punctuation",
        "meta.brace",
        "constant.name.attribute.tag.pug",
        "attribute_value",
        "meta.tag.other",
        "string.interpolated",
        "constant.character.escape",
        "comment.line.double-slash",
        "punctuation.definition.string.template",
        "keyword.operator.assignment",
      ],
      settings: {
        foreground: colors.tokens.color1,
      },
    },
    {
      name: "Gray - Italic",
      scope: [
        "comment",
        "string.comment",
        "punctuation.definition.comment",
        "variable.parameter",
        "meta.function.stylus",
      ],
      settings: {
        foreground: colors.tokens.color1,
        fontStyle: "italic",
      },
    },
    {
      name: "Blue",
      scope: [
        "meta.definition.variable",
        "variable.other",
        "variable",
        "support.variable.object",
        "support.class",
        "entity.name.tag",
        "meta.function",
        "support.function",
        "meta.list",
        "entity.name.constant",
        "variable.parameter",
        "support.type.property-name.json",
        "support.type.property-name.css",
      ],
      settings: {
        foreground: colors.tokens.color2,
      },
    },
    {
      name: "Blue - Italic",
      scope: ["variable.parameter"],
      settings: {
        foreground: colors.tokens.color2,
        fontStyle: "italic",
      },
    },
    {
      name: "Orange",
      scope: [
        "constant.numeric",
        "string.quoted",
        "string.unquoted.plain.out.yaml",
        "string.template",
        "entity.name.label",
        "constant.other.color.rgb-value",
        "meta.property-value",
        "storage.type.function.arrow",
        "string.regexp",
        "constant.language",
        "support.variable.property.process",
        "support.function.without-args.liquid",
      ],
      settings: {
        foreground: colors.tokens.color3,
      },
    },
    {
      name: "Green",
      scope: [
        "storage.type",
        "keyword.control",
        "storage.modifier",
        "entity.other.attribute-name.tag",
        "entity.name.tag.css",
        "entity.other.attribute-name.pseudo-element",
        "meta.selector",
        "meta.attribute-selector",
        "storage.struct.racket",
        "entity.other.attribute-name.html",
        "keyword.operator",
        "entity.name.tag.liquid",
      ],
      settings: {
        foreground: colors.tokens.color4,
      },
    },
    {
      name: "Yellow",
      scope: [
        "meta.function-call",
        "entity.name.function",
        "support.function.construct.output",
        "entity.other.attribute-name.class",
        "entity.other.attribute-name.id",
        "entity.other.attribute-name.pseudo-class",
        "keyword.other.unit",
        "meta.definition.function",
        "support.variable.property",
        "support.type.primitive",
        "keyword.hdl",
        "entity.other.attribute-name.placeholder.css",
        "support.class.liquid",
        "support.variable.liquid",
      ],
      settings: {
        foreground: colors.tokens.color5,
      },
    },
    {
      name: "Purple",
      scope: [
        "support.function.process",
        "support.function.console",
        "meta.tag.sgml.doctype",
        "keyword.other.racket",
        "variable.other.property",
        "constant.other.placeholder",
        "entity.other.inherited-class",
        "entity.name.type.module",
        "entity.name.type",
        "support.type.object.module",
        "keyword.other.important.css",
        "meta.object-literal.key.js",
        "meta.tag.attributes",
      ],
      settings: {
        foreground: colors.tokens.color6,
      },
    },
    {
      name: "Red - Italic",
      scope: ["keyword.other.important.css"],
      settings: {
        foreground: colors.tokens.color7,
        fontStyle: "italic",
      },
    },
  ],
  // TODO
  semanticHighlighting: true,
  semanticTokenColors: {
    "variable.readonly:java": "#ff0011",
  },
};
