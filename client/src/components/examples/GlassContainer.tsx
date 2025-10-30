import GlassContainer from '../GlassContainer';

export default function GlassContainerExample() {
  return (
    <div className="p-8 bg-gradient-to-br from-purple-500 to-pink-500">
      <GlassContainer className="p-8">
        <h3 className="text-xl font-semibold text-white mb-2">Glass Container</h3>
        <p className="text-white/90">This is a glassmorphic container with backdrop blur effect.</p>
      </GlassContainer>
    </div>
  );
}
