using Streamish.Models;
using System.Collections.Generic;

namespace Streamish.Repositories
{
    public interface IVideoRepository
    {
        List<Video> Search(string criterion, bool sortDescending);
        List<Video> GetAllWithComments();
        Video GetVideoByIdWithComments(int id);
        void Add(Video video);
        void Delete(int id);
        List<Video> GetAll();
        Video GetById(int id);
        void Update(Video video);

    }
}