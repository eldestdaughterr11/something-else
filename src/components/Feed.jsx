import React from 'react';
import { Video, Image as ImageIcon, Smile, ThumbsUp, MessageSquare, Share2, MoreHorizontal, X } from 'lucide-react';

const Story = ({ image, profile, name, isCreate }) => {
  if (isCreate) {
    return (
      <div className="relative w-28 h-48 rounded-xl shadow-sm overflow-hidden flex-shrink-0 cursor-pointer group bg-white border border-gray-200 hover:bg-gray-50">
        <img src={profile} className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" alt="Create Story" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center border-4 border-white z-10">
          <Plus className="text-white w-6 h-6" />
        </div>
        <div className="absolute bottom-0 w-full h-12 flex flex-col justify-end items-center pb-2">
          <span className="text-sm font-semibold mt-4 text-center">Create story</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-28 h-48 rounded-xl overflow-hidden flex-shrink-0 cursor-pointer group shadow-sm">
      <img src={image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Story" />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
      <div className="absolute top-3 left-3 w-10 h-10 rounded-full border-4 border-blue-500 overflow-hidden z-10">
        <img src={profile} alt="Profile" className="w-full h-full object-cover" />
      </div>
      <span className="absolute bottom-3 left-3 text-white font-semibold text-sm z-10 drop-shadow-md">{name}</span>
    </div>
  );
};
import { Plus } from 'lucide-react';

const Post = ({ author, time, content, image, likes, comments, shares, profilePic }) => {
  return (
    <div className="bg-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.2)] mb-4">
      {/* Post Header */}
      <div className="flex items-center justify-between p-4 pb-2">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={profilePic} alt={author} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <h4 className="font-semibold text-[15px] hover:underline">{author}</h4>
            <div className="text-[13px] text-gray-500 flex items-center gap-1">
              <span>{time}</span>
              <span>·</span>
              <span className="w-3 h-3 bg-gray-500 rounded-full flex items-center justify-center text-[8px] text-white">i</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer text-gray-500">
            <MoreHorizontal className="w-5 h-5" />
          </div>
          <div className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer text-gray-500">
            <X className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-3 text-[15px]">
        {content}
      </div>

      {/* Post Image */}
      {image && (
        <div className="w-full">
          <img src={image} alt="Post" className="w-full object-cover max-h-[600px]" />
        </div>
      )}

      {/* Post Stats */}
      <div className="px-4 py-2 border-b border-gray-200 flex justify-between items-center text-gray-500 text-[15px]">
        <div className="flex items-center gap-1">
          <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
            <ThumbsUp className="w-3 h-3 text-white" fill="currentColor" />
          </div>
          <span className="hover:underline cursor-pointer">{likes}</span>
        </div>
        <div className="flex gap-3">
          <span className="hover:underline cursor-pointer">{comments} comments</span>
          <span className="hover:underline cursor-pointer">{shares} shares</span>
        </div>
      </div>

      {/* Post Actions */}
      <div className="px-4 py-1 flex items-center justify-between text-gray-500 font-medium text-[15px]">
        <div className="flex-1 flex justify-center items-center gap-2 hover:bg-gray-100 py-2 rounded-lg cursor-pointer">
          <ThumbsUp className="w-5 h-5" />
          <span>Like</span>
        </div>
        <div className="flex-1 flex justify-center items-center gap-2 hover:bg-gray-100 py-2 rounded-lg cursor-pointer">
          <MessageSquare className="w-5 h-5" />
          <span>Comment</span>
        </div>
        <div className="flex-1 flex justify-center items-center gap-2 hover:bg-gray-100 py-2 rounded-lg cursor-pointer">
          <Share2 className="w-5 h-5" />
          <span>Share</span>
        </div>
      </div>
    </div>
  );
};

const Feed = () => {
  return (
    <div className="w-full max-w-[680px] mx-auto pt-4 md:px-8 pb-10">
      
      {/* Stories Section */}
      <div className="flex gap-2 overflow-x-auto pb-4 hide-scrollbar">
        <Story isCreate={true} profile="https://i.pravatar.cc/150?img=11" />
        <Story name="Alex Johnson" profile="https://i.pravatar.cc/150?img=12" image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=300&q=80" />
        <Story name="Emma Watson" profile="https://i.pravatar.cc/150?img=5" image="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=300&q=80" />
        <Story name="Mark Zuckerberg" profile="https://i.pravatar.cc/150?img=15" image="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=300&q=80" />
        <Story name="Lisa Manobal" profile="https://i.pravatar.cc/150?img=20" image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80" />
      </div>

      {/* Create Post Section */}
      <div className="bg-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.2)] p-4 mb-4 mt-2">
        <div className="flex gap-2 items-center mb-3">
          <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-10 h-10 rounded-full cursor-pointer object-cover" />
          <div className="bg-gray-100 hover:bg-gray-200 rounded-full flex-1 py-2.5 px-4 cursor-pointer transition-colors text-gray-500 text-[17px]">
            What's on your mind, Van Ryan?
          </div>
        </div>
        <div className="border-t border-gray-200 pt-3 flex justify-between">
          <div className="flex-1 flex justify-center items-center gap-2 hover:bg-gray-100 py-2 rounded-lg cursor-pointer text-gray-500 font-medium">
            <Video className="w-6 h-6 text-red-500 fill-current" />
            <span className="hidden sm:block">Live video</span>
          </div>
          <div className="flex-1 flex justify-center items-center gap-2 hover:bg-gray-100 py-2 rounded-lg cursor-pointer text-gray-500 font-medium">
            <ImageIcon className="w-6 h-6 text-green-500 fill-current" />
            <span className="hidden sm:block">Photo/video</span>
          </div>
          <div className="flex-1 flex justify-center items-center gap-2 hover:bg-gray-100 py-2 rounded-lg cursor-pointer text-gray-500 font-medium">
            <Smile className="w-6 h-6 text-yellow-500 fill-current" />
            <span className="hidden sm:block">Feeling/activity</span>
          </div>
        </div>
      </div>

      {/* Feed Posts */}
      <Post 
        author="React Developers"
        profilePic="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=150&q=80"
        time="2h"
        content="Excited to announce the new features in React 19! The new concurrent rendering features will make applications faster and more responsive than ever before. What are you most excited about?"
        image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
        likes="4.2K"
        comments="324"
        shares="856"
      />

      <Post 
        author="Jane Smith"
        profilePic="https://i.pravatar.cc/150?img=5"
        time="5h"
        content="Just had the most amazing coffee at this new local shop! ☕✨ Highly recommend trying their caramel macchiato."
        image="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80"
        likes="128"
        comments="12"
        shares="2"
      />
      
      <Post 
        author="Tech News Daily"
        profilePic="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=150&q=80"
        time="12h"
        content="The future of AI is moving incredibly fast. Today, a new AI model was released that can generate complete applications from just a single prompt. Developers are both excited and cautious."
        likes="12K"
        comments="1.5K"
        shares="3.2K"
      />
    </div>
  );
};

export default Feed;
