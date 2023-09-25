# Solutions

This contains page contains solutions for the exercise, do not read if you don't want to get spoiled !

<details>
<summary>A solution</summary>

```javascript
// You could write a custom hook to memoized the selected image URL and don't redo it again
const useImageUrl = (id: string) => {
    const imageOptions = useSelector(state => state.imageOptions);

    return useMemo(() => selectImageUrl(id, imageOptions), [id, imageOptions]);
};

const Card = ({ id }) => {
    const imageUrl = useImageUrl(id);

    return <img src={imageUrl} />
}
```
</details>
