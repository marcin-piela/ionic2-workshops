export class Collection<T> {
    /**
     * The underlying array data structure of the collection
     * @type {Array}
     * @private
     */
    private items = [];

    /**
     * Get the collection as an array
     * @returns {Array}
     * @constructor
     */
    public all() {
        return this.items;
    }

    /**
     * Get a specific item from a collection given it's index
     * @param index
     * @constructor
     */
    public get(index:number):T {
        return this.items[index];
    }

    /**
     * Count of the collection
     * @returns {number}
     * @constructor
     */
    public count() {
        return this.items.length;
    }

    /**
     * Add an object to the collection
     * @param item
     * @constructor
     */
    public add(item:T) {
        this.items.push(item);
    }

    /**
     * Remove object from collection
     * @param item
     */
    public remove(item:T) {
        this.items.splice(this.findIndex(item), 1);
    }

    /**
     * Find the index by item
     * @param obj
     * @param fromIndex
     * @returns {number}
     * @constructor
     */
    private findIndex(obj:T, fromIndex?:number):number {
        if (fromIndex == null) {
            fromIndex = 0;
        } else if (fromIndex < 0) {
            fromIndex = Math.max(0, this.items.length + fromIndex);
        }
        for (var i = fromIndex, j = this.items.length; i < j; i++) {
            if (this.items[i] === obj)
                return i;
        }
        return -1;
    }

    /**
     * Reorder
     * @param indexes
     */
    public reorderItems(indexes) {
        let element = this.items[indexes.from];
        this.items.splice(indexes.from, 1);
        this.items.splice(indexes.to, 0, element);
    }
}