(ns hello
  (:require [goog.dom :as dom]
            [goog.editor.Command :as Command]
            [goog.editor.Field :as Field]
            [goog.editor.plugins.BasicTextFormatter :as BasicTextFormatter]
            [goog.editor.plugins.EnterHandler :as EnterHandler]
            [goog.editor.plugins.HeaderFormatter :as HeaderFormatter]
            [goog.editor.plugins.LinkBubble :as LinkBubble]
            [goog.editor.plugins.LinkDialogPlugin :as LinkDialogPlugin]
            [goog.editor.plugins.ListTabHandler :as ListTabHandler]
            [goog.editor.plugins.LoremIpsum :as LoremIpsum]
            [goog.editor.plugins.RemoveFormatting :as RemoveFormatting]
            [goog.editor.plugins.SpacesTabHandler :as SpacesTabHandler]
            [goog.editor.plugins.UndoRedo :as UndoRedo]
            [goog.ui.editor.DefaultToolbar :as DefaultToolbar]
            [goog.ui.editor.ToolbarController :as ToolbarController]))

(def buttons
  (array
    goog.editor.Command/BOLD,
    goog.editor.Command/ITALIC,
    goog.editor.Command/UNDERLINE,
    goog.editor.Command/FONT_SIZE,
    goog.editor.Command/LINK,
    goog.editor.Command/UNORDERED_LIST,
    goog.editor.Command/ORDERED_LIST,
    goog.editor.Command/INDENT,
    goog.editor.Command/OUTDENT
    goog.editor.Command/REMOVE_FORMAT))

(def my-field (atom nil))

(defn ^:export updateFieldContents []
  (let [field-contents (dom/getElement "fieldContents")]
    (set! field-contents.value (.getCleanContents @my-field))))

(defn register-plugins [field]
  (.registerPlugin field (new goog.editor.plugins/BasicTextFormatter))
  (.registerPlugin field (new goog.editor.plugins/RemoveFormatting))
  (.registerPlugin field (new goog.editor.plugins/ListTabHandler))
  (.registerPlugin field (new goog.editor.plugins/SpacesTabHandler))
  (.registerPlugin field (new goog.editor.plugins/EnterHandler))
  (.registerPlugin field (new goog.editor.plugins/HeaderFormatter))
  (.registerPlugin field (new goog.editor.plugins/LoremIpsum "Click here to edit"))
  (.registerPlugin field (new goog.editor.plugins/LinkDialogPlugin))
  (.registerPlugin field (new goog.editor.plugins/LinkBubble)))

(defn ^:export setupEditor []
  (reset! my-field (new goog.editor/Field "editMe"))
  (register-plugins @my-field)

  (let [myToolbar           (DefaultToolbar/makeToolbar buttons (dom/getElement "toolbar"))
        myToolbarController (new goog.ui.editor/ToolbarController @my-field myToolbar)]

    (goog.events/listen @my-field goog.editor.Field.EventType/DELAYEDCHANGE updateFieldContents)
    (. @my-field (makeEditable))
    (updateFieldContents)))

