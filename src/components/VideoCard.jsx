import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({video: { id: {videoId}, snippet }}) => {

  return (
    <Card sx={{ width: {  xs:'100%', sm:'358px', md: '328px'}, boxShadow:'none', borderRadius: 0 }} >
      <Link to={ videoId ? `/video/${videoId}` : demoVideoUrl }>
        <CardMedia 
          image={snippet?.thumbnails?.high?.url} 
          alt={snippet?.title}
          sx={{ width:{xs:'100%', sm:'358px', md:'328px'}, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height:'106px'}}>
        <Link to={ videoId ? `/video/${videoId}` : demoVideoUrl }>
          <Typography variant="subtitle1" color="#FFF" fontWeight="bold">
            {snippet?.title.slice(0, 60)} || {demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channetId}` : demoChannelUrl}>
          <Typography variant="subtitle2" color="gray" fontWeight="bold">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize:12, color:'gray', ml:'px' }}/> 
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard;
