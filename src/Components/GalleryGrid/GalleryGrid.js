import React from "react"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import Typography from "@material-ui/core/Typography"
import Image from "Components/Image"
import useStyles from "./styles"


const GalleryGrid = ({
  items = [],
  onSelect
  }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      { items.length ?
        <GridList
            cellHeight={320}
            className={classes.gridList}
            cols={5}
        >
          {items.map((tile, index) => (
            <GridListTile
                classes={{
                  root: classes.gridTile
                }}
                key={`${tile.id}-${index}`}
                cols={1}
                onClick={_ => onSelect(tile.id)}
            >
              <Image src={tile.img} alt={tile.title} />

              <GridListTileBar
                  subtitle={
                    <Typography variant="subtitle1">
                      { tile.title }
                    </Typography>
                  }
              />
            </GridListTile>
          ))}
        </GridList>
        : "#TODO Create placeholder"
      }
    </div>
  )
}


export default GalleryGrid
