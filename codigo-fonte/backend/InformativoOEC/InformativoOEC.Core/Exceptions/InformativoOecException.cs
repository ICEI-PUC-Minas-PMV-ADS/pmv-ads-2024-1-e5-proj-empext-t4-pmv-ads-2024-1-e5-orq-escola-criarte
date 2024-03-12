using System.Runtime.Serialization;
namespace InformativoOEC.Core.Exceptions;

[Serializable]
public class InformativoOecException : SystemException
{
    
    public InformativoOecException(string message) : base(message) { }
    protected InformativoOecException(SerializationInfo info, StreamingContext context) : base(info,context) { }
}
